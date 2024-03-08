import { IsNotEmpty } from 'class-validator'
import { BaseDTO } from '../../config/base.dto'

export class ProductInfoDTO extends BaseDTO {
  @IsNotEmpty()
  features!: string
}