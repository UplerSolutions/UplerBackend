import { BaseRouter } from "../shared/router/router";
import { ProductInfoController } from "./controllers/products.info.controller";
import { ProductInfoMiddleware } from "./middlewares/product.info.middleware";
export class ProductInfoRouter extends BaseRouter<
  ProductInfoController,
  ProductInfoMiddleware
> {
  constructor() {
    super(ProductInfoController, ProductInfoMiddleware);
  }

  routes(): void {
    this.router.get(
      "/productsInfo", 
      (req, res) => this.controller.getProducts(req, res)
    );
    this.router.get(
      "/productInfo/:id", 
      (req, res) =>this.controller.getProductById(req, res)
    );
    this.router.post(
        "/createProductInfo",
        (req, res, next) => [this.middleware.productValidator(req, res, next)],
        (req, res) => this.controller.createProduct(req, res)
      );
    this.router.put("/updateProductInfo/:id", (req, res) =>
        this.controller.updateProduct(req, res)
      );
    this.router.delete("/deleteProductInfo/:id", (req, res) =>
        this.controller.deleteProduct(req, res)
      );

  }

}