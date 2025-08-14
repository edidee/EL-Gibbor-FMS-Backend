// src/students/dto/create-student.dto.ts
import { Optional } from '@nestjs/common';
import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export enum Status {
  ACTIVE = 'ACTIVE',
  REPEATING = 'REPEATING',
  EXSTUDENT = 'EX-STUDENT',
}

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  admission_number: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsEnum(Status)
  status?: Status;

  @IsString()
  @IsNotEmpty()
  guardian_name: string;

  @IsString()
  @Matches(/^\+?\d{7,15}$/, {
    message: 'guardian_phone_number must be a valid phone number',
  })
  guardian_phone_number: string;
}
