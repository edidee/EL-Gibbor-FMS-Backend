import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database-connection';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as studentSchema  from 'src/student/schema/schema';
import * as sessionSchema from 'src/session/schema/schema'
import * as termSchema from 'src/terms/schema/schema'
import * as classSchema from 'src/class/schema/schema'
import * as standardFeeSchema from 'src/standard_fees/schema/schema'
import * as paymentSchema from 'src/payments/schema/schema'


@Module({
    providers:[
        {
            provide: DATABASE_CONNECTION,
            useFactory : (configService: ConfigService) => {
                const pool = new Pool({
                    connectionString: configService.getOrThrow('DATABASE_URL'),
                })
               return drizzle(pool, {
                    schema: {

                        ... studentSchema,
                        ... sessionSchema,
                        ... termSchema,
                        ... classSchema,
                        ... standardFeeSchema,
                        ... paymentSchema
                    },
                })
            },
            inject: [ConfigService],
        }

    ] ,
    exports:[DATABASE_CONNECTION]
})
export class DatabaseModule {

}
 