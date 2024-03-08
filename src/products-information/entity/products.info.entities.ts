import { Column, Entity, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { ProductEntity } from '../../products/entities/products.entity';

export class ProductsInfoEntity extends BaseEntity {
    @Column()
    features!:string;

    @OneToOne(
        () => ProductEntity,
        (product) => product.id
      )
      product!: ProductEntity;
}