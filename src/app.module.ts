import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [AuthModule, StudentModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
