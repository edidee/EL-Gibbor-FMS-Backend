import { BadRequestException, ConflictException, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
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
                      .where(eq(schema.students.admission_number, dto.admission_number))
                      .execute();
                      
    if (student.length > 0){
      throw new ConflictException("Student with admission number already exists");
    }
    let admission_no = await this.generateAdmissionNumber()
    const created = await this.db
                              .insert(schema.students)
                              .values({
                                first_name: dto.first_name,
                                last_name: dto.last_name,
                                admission_number: admission_no,
                                guardian_name: dto.guardian_name,
                                guardian_phone_number: dto.guardian_phone_number
                              })
                              .returning();
    
    if (created. length > 0){
       return created;
    } else{
        throw new InternalServerErrorException('Failed to create student record');
    }
   }

  async findStudentByAdmissionNumber(admissionNumber: string) {
    const student = await this.db.
                      select()
                      .from(schema.students)
                      .where(eq(schema.students.admission_number, admissionNumber))
                      .execute();
    if(student.length > 0 ){
      return student;
    } else{
      throw new BadRequestException(`Student with ${admissionNumber} doesn't exist`)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
  
  async  generateAdmissionNumber(): Promise<string> {
  
  const latest = await this.db
    .select({ admissionNumber: schema.students.admission_number })
    .from(schema.students)
    .orderBy(desc(schema.students.admission_number))
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
