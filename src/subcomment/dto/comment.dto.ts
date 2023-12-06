import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";


export class SubCommentDTO extends BaseDTO{
    @IsNotEmpty()
    subcomment!:string

}