import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";


export class CommentDTO extends BaseDTO{
    @IsNotEmpty()
    comment!:string

}