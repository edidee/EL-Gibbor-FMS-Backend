import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.createSession(createSessionDto);
  }

  @Get('get:sessionName')
  getSessionBySessionName(@Param('sessionName') sessionName:string  ) {
    return this.sessionService.getSessionBySesssionName(sessionName);
  }

  @Get('/get-all-session')
  getAllSeesion() {
    return this.sessionService.getAllSessions();
  }

  @Put('/updatesession/:id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionService.updateSessionUodate(+id, updateSessionDto);
  }

}
