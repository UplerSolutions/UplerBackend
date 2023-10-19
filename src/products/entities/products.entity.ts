import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { CategoryEntity } from '../../category/entities/category.entity'
import { PurchasesProductsEntity } from '../../purchase-products/entities/purchases-products.entity'

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @Column()
  productName!: string

  @Column()
  LowDescription!: string

  @Column()
  LongDescription!: string

  @Column()
  seller!: string

  @Column()
  directLink!: string

  @Column()
  price!: number

  @Column()
  imageUrl!: string

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products
  )
  @JoinColumn({ name: 'category_id' })
  category!: CategoryEntity

  @OneToMany(
    () => PurchasesProductsEntity,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchasesProductsEntity[]

  @Column()
  rating!: number
}
