import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [AuthModule, StudentModule, SessionModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
