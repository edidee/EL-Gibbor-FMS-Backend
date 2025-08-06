import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { SessionModule } from './session/session.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    AuthModule, 
    StudentModule, 
    SessionModule, 
    DatabaseModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}

  