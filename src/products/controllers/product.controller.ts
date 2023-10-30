import { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import { ProductDTO } from "../dto/product.dto";

export class ProductController {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {}
  async getProducts(req: Request, res: Response) {
    try {
      const data = await this.productService.findAllProducts();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.findProductById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getProductSearchByName(req: Request, res: Response) {
    try{
      const data=await this.productService.searchProductByName(req.query.name as string);
      res.status(200).json(data);
    }catch(e){
      console.error(e);
    }
  }
  async getProductSearchByRange(req:Request,res:Response){
    const low = parseInt(req.query.low as string, 10) || 0;
    const high = parseInt(req.query.high as string, 10) || 1000;
    try{
      const data = await this.productService.searchProductByRange(low, high)
      res.status(200).json(data);
    }catch(e){
      console.error(e);
    }
  }
  async getProductsByCategory(req: Request, res: Response) {
    try {
      // Extract the categoryId from the request query
      const category= req.query.categoryId as string;
      // Call the productService to filter products by category
      const data = await this.productService.filterProductsByCategory(category);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async createProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.createProduct(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.updateProduct(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.deleteProduct(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}