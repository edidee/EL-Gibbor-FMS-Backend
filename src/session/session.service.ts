import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { DATABASE_CONNECTION } from 'src/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from 'src/session/schema/schema';  
import { sql, eq } from 'drizzle-orm';

@Injectable()
export class SessionService {

   constructor( 
       @Inject(DATABASE_CONNECTION)
      private readonly db: NodePgDatabase<typeof schema>,
    ){}

  async createSession(dto: CreateSessionDto) {
  
    let affectedRowLimit = 1;
    let {sessionName, startDate, endDate } = dto
    const startDateString = startDate instanceof Date ? startDate.toISOString().split('T')[0] : startDate;
    const endDateString = endDate instanceof Date ? endDate.toISOString().split('T')[0] : endDate;

    const session = await this.db
                                .insert(schema.sessions)
                                .values({
                                      startDate :startDateString,
                                      endDate : endDateString ,
                                      sessionName:sessionName
                                   }) 
                                .onConflictDoNothing();

    if((session.rowCount ?? 0) < affectedRowLimit){
      throw new InternalServerErrorException("Couldn't save session.")
    } else{
      return session
    } 
  }

  async getSessionBySesssionName( sessionName: string) {

    const session = await this.db.
                          select()
                          .from(schema.sessions)
                          .where(eq(schema.sessions.sessionName , sessionName))
                          .execute();
        if(session.length > 0 ){
          return session;
        } else{
          throw new NotFoundException(`${sessionName} doesn't  exist`)
        }
    
  }

  async getAllSessions() {
    const session = await this.db.
                          select()
                          .from(schema.sessions)                      
                          .execute();
    return session;        
  }

  async updateSessionUodate(id: number, dto: UpdateSessionDto) {

    let {sessionName, startDate, endDate } = dto
    const startDateString = startDate instanceof Date ? startDate.toISOString().split('T')[0] : startDate;
    const endDateString = endDate instanceof Date ? endDate.toISOString().split('T')[0] : endDate;
 
       const session = await this.db
                       .select()
                       .from(schema.sessions)
                       .where(eq(schema.sessions.id, id!))
                       .execute();
 
       if (session.length < 0){
         throw new NotFoundException(`No Session with ${id}`)
       }
     
       const updated = await this.db
                               .update(schema.sessions)
                               .set({
                                 sessionName:sessionName,
                                 startDate: startDateString,
                                 endDate: endDateString
                               })
                               .where(eq(schema.sessions.id, id))
                               .returning();
       if (updated.length > 0){
         return updated;
       } else{
           throw new InternalServerErrorException('Failed to update record');
       }
 
   }

}
