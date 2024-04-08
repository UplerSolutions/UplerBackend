import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class ContactDTO extends BaseDTO {
    @IsNotEmpty()
    name!:string;

    @IsNotEmpty()
    lastname!:string;

    @IsNotEmpty()
    email!:string;

    @IsNotEmpty()
    position!:string;

    @IsNotEmpty()
    companyName!:string;

    @IsNotEmpty()
    website!:string;

    @IsNotEmpty()
    productName!:string

    @IsNotEmpty()
    productCategory!:string;

    @IsNotEmpty()
    productDescription!:string;


}