import { BadRequestException, ConflictException, Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DATABASE_CONNECTION } from 'src/database/database-connection';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './entities/schema';
import { desc, eq } from 'drizzle-orm';

@Injectable()
export class StudentService {
  constructor( 
     @Inject(DATABASE_CONNECTION)
    private readonly db: NodePgDatabase<typeof schema>,
  ){}
  

   async createStudent(dto: CreateStudentDto){
    const student = await this.db.
                      select()
                      .from(schema.students)
                      .where(eq(schema.students.admissionNumber, dto.admission_number))
                      .execute();
                      
    if (student.length > 0){
      throw new ConflictException("Student with admission number already exists");
    }
    let admission_no = await this.generateAdmissionNumber()
    const created = await this.db
                              .insert(schema.students)
                              .values({
                                firstName: dto.first_name,
                                lastName: dto.last_name,
                                admissionNumber: admission_no,
                                guardianName: dto.guardian_name,
                                guardianPhoneNumber: dto.guardian_phone_number
                              })
                              .returning();
    
    if (created. length > 0){
       return created;
    } else{
        throw new InternalServerErrorException('Failed to create student record');
    }
   }

  async findStudentByAdmissionNumber(admissionNumber: string) {
    const student = await this.db
                      .select()
                      .from(schema.students)
                      .where(eq(schema.students.admissionNumber, admissionNumber))
                      .execute();
    if(student.length > 0 ){
      return student;
    } else{
      throw new NotFoundException(`Student with ${admissionNumber} doesn't exist`)
    }
  }



  async updateStudent(id: number, dto: UpdateStudentDto) {

      const student = await this.db
                      .select()
                      .from(schema.students)
                      .where(eq(schema.students.id, id!))
                      .execute();

      if (student.length < 0){
        throw new NotFoundException(`No student with ${id}`)
      }
    
      const updated = await this.db
                              .update(schema.students)
                              .set({
                                guardianName: dto.guardian_name,
                                guardianPhoneNumber: dto.guardian_phone_number
                              })
                              .where(eq(schema.students.admissionNumber, dto.admission_number))
                              .returning();
      if (updated.length > 0){
        return updated;
      } else{
          throw new InternalServerErrorException('Failed to create student record');
      }

  }

 
  
  private async  generateAdmissionNumber(): Promise<string> {
  
    const latest = await this.db
      .select({ admissionNumber: schema.students.admissionNumber })
      .from(schema.students)
      .orderBy(desc(schema.students.admissionNumber))
      .limit(1);

    const currentYear = new Date().getFullYear();
    const prefix = `ELG${currentYear}`;

    let nextNumber = 1;

    if (latest.length > 0 && latest[0].admissionNumber?.startsWith(prefix)) {
      const last = latest[0].admissionNumber;
      const numericPart = parseInt(last.slice(prefix.length), 10);
      nextNumber = numericPart + 1;
  }

  const padded = String(nextNumber).padStart(4, '0');
  return `${prefix}${padded}`;
}
 
}
