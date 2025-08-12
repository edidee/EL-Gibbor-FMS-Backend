import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateStudentDto {

    @IsString()
    @IsNotEmpty()
    admission_number: string;

    @IsString()
    @IsNotEmpty()
    guardian_name: string;
    
    @IsString()
    @Matches(/^\+?\d{11,15}$/, {
        message: 'guardian_phone_number must be a valid phone number',
      })
    guardian_phone_number: string;
}
    
