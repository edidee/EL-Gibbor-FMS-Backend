import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { SessionModule } from './session/session.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TermsModule } from './terms/terms.module';
import { StandardFeesModule } from './standard_fees/standard_fees.module';
import { ExtraFeesModule } from './extra_fees/extra_fees.module';
import { PaymentsModule } from './payments/payments.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule, 
    StudentModule, 
    SessionModule, 
    DatabaseModule, TermsModule, StandardFeesModule, ExtraFeesModule, PaymentsModule, ClassModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}

  