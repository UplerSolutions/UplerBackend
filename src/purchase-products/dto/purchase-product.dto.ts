import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
// import { CustomerEntity } from "../../customer/entitites/customer.entity";
import { ProductEntity } from "../../products/entities/products.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

export class PurchaseProductDTO extends BaseDTO {
  @IsNotEmpty()
  quantityProduct!: number;

  @IsOptional()
  totalPrice?: number;

  @IsOptional()
  purchase?: PurchaseEntity;

  @IsOptional()
  product?: ProductEntity;
}