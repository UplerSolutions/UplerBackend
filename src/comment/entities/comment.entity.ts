import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity"
import { ProductEntity } from "../../products/entities/products.entity";

@Entity({name:'comments'})
export class CommentEntity extends BaseEntity{
    @Column()
    comment!:string;

    @OneToMany(()=>ProductEntity,(product)=>product.category)
    product!:ProductEntity[]
    
}
