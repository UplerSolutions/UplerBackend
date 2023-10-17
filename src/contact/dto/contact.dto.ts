import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class ContactDTO extends BaseDTO {
    @IsNotEmpty()
    name!:string;

    @IsNotEmpty()
    lastname!:string;

    @IsNotEmpty()
    enterprise!:string;

    @IsNotEmpty()
    email!:string;

    @IsNotEmpty()
    phone!:string;

    @IsNotEmpty()
    message!:string;
}