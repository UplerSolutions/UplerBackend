import { Request, Response } from "express";
import { ProductInfoService } from "../services/products.info.service";

export class ProductInfoController{
    constructor(
        private readonly productInfoService: ProductInfoService = new ProductInfoService()
      ) {}
      
      async getProducts(req: Request, res: Response) {
        try {
          const data = await this.productInfoService.findAllProducts();
          res.status(200).json(data);
        } catch (e) {
          console.error(e);
        }
      }
      async getProductById(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const data = await this.productInfoService.findProductById(id);
          res.status(200).json(data);
        } catch (e) {
          console.error(e);
        }
      }

      async createProduct(req: Request, res: Response) {
        try {
          const data = await this.productInfoService.createProduct(req.body);
          res.status(200).json(data);
        } catch (e) {
          console.error(e);
        }
      }
      async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const data = await this.productInfoService.updateProduct(id, req.body);
          res.status(200).json(data);
        } catch (e) {
          console.error(e);
        }
      }
      async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
          const data = await this.productInfoService.deleteProduct(id);
          res.status(200).json(data);
        } catch (e) {
          console.error(e);
        }
      }
}