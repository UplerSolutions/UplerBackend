import { ProductService } from '../../products/services/product.service';
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { PurchasesProductsEntity } from "../entities/purchases-products.entity";
import { PurchaseProductDTO } from "../dto/purchase-product.dto";

 

export class PurchaseProductService extends BaseService<PurchasesProductsEntity>{
    constructor(private readonly productService: ProductService = new ProductService()){
        super(PurchasesProductsEntity);
    };
    async findAllPurchaseProducts():Promise<PurchasesProductsEntity[]>{
        return (await this.execRepository).find();
    };
    async findPurchaseProductById(id: string): Promise<PurchasesProductsEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    async createPurchaseProduct(body:PurchaseProductDTO):Promise<PurchasesProductsEntity>{
        const newPP=(await this.execRepository).create(body)//creamos en memoria 
        const prod= await this.productService.findProductById(newPP.product.id)
        newPP.totalPrice=prod!.price*newPP.quantityProduct;
        return (await this.execRepository).save(newPP);
    };
    async deletePurchaseProduct(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };
    async updatePurchaseProduct(id:string,infoUpdate:PurchaseProductDTO):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};
