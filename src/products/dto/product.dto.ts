import { IsNotEmpty } from 'class-validator'
import { BaseDTO } from '../../config/base.dto'
import { CategoryEntity } from '../../category/entities/category.entity'

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  productName!: string

  @IsNotEmpty()
  lowDescription!: string

  @IsNotEmpty()
  longDescription!: string

  @IsNotEmpty()
  seller!: string

  @IsNotEmpty()
  directLink!: string

  @IsNotEmpty()
  price!: number

  @IsNotEmpty()
  category!: CategoryEntity

  @IsNotEmpty()
  imageUrl!: string

  @IsNotEmpty()
  founderName!: string

  @IsNotEmpty()
  founderImage!: string

  @IsNotEmpty()
  founderDescription!: string

  @IsNotEmpty()
  linkdin!: string
}
