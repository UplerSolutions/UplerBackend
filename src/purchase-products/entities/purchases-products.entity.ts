import { Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import { BaseEntity } from "../../config/base.entity"
import { CategoryEntity } from "../../category/entities/category.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../../products/entities/products.entity";

@Entity({name:'purchases_products'})
export class PurchasesProductsEntity extends BaseEntity{
    @Column()
    quantityProduct!:number;

    @Column()
    totalPrice!:number;

    @ManyToOne(()=>PurchaseEntity,(purchase)=>purchase.purchaseProduct)
    @JoinColumn({name:"purchase_id"})
    purchase!:PurchaseEntity;

    @ManyToOne(()=>ProductEntity,(product)=>product.purchaseProduct)
    @JoinColumn({name:"product_id"})
    product!:ProductEntity
}