import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { CategoryEntity } from '../../category/entities/category.entity'
import { PurchasesProductsEntity } from '../../purchase-products/entities/purchases-products.entity'

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @Column()
  productName!: string

  @Column()
  lowDescription!: string

  @Column({ type: 'text' })
  longDescription!: string

  @Column()
  seller!: string

  @Column()
  directLink!: string

  @Column()
  price!: number

  @Column()
  imageUrl!: string

  @Column()
  founderName!: string

  @Column()
  founderImage!: string

  @Column()
  founderDescription!: string

  @Column()
  linkdin!: string

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
