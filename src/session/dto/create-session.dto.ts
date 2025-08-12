import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateSessionDto {

    @IsString()
    @IsNotEmpty()
    sessionName: string;

    @IsDate()
    @IsNotEmpty()
    startDate: Date

    @IsDate()
    @IsNotEmpty()
    endDate: Date

}
