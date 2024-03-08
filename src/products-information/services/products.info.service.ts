import { DeleteResult, UpdateResult, ILike, Between, FindManyOptions } from "typeorm";
import { BaseService } from "../../config/base.service";
import { ProductsInfoEntity } from "../entity/products.info.entities";
import { ProductInfoDTO } from "../dto/products.info.dto";


export class ProductInfoService extends BaseService<ProductsInfoEntity> {
  constructor() {
    super(ProductsInfoEntity);
  }

  async findAllProducts(): Promise<ProductsInfoEntity[]> {
    return (await this.execRepository).find();
  }
  async findProductById(id: string): Promise<ProductsInfoEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createProduct(body: ProductInfoDTO): Promise<ProductsInfoEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updateProduct(id: string, infoUpdate: ProductInfoDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}