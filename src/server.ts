import "reflect-metadata"
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import "dotenv/config"
import { ConfigServer } from "./config/config";
import {DataSource} from "typeorm";
import { CategoryRouter } from "./category/category.router";
import { PurchaseProductRouter } from "./purchase-products/purchase-product.router";
import { CustomerRouter } from "./customer/customer.router";
import { ProductRouter } from "./products/products.router";
import { PurchaseRouter } from "./purchase/purchase.router";
import { LoginStrategy } from "./auth/strategies/login.strategy";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { AuthRouter } from "./auth/auth.router";
import { ContactRouter } from "./contact/contact.router";
import helmet from "helmet";
import { CommentRouter } from "./comment/comment.router";
import { SubCommentRouter } from "./subcomment/comment.router";
import { ProductInfoRouter } from "./products-information/product.info.route";



class ServerBootstrap extends ConfigServer{
    //definimos nustras variables a utilizar
    public app:express.Application=express();
    private port:number=this.getNumberEnv("PORT");
    constructor(){
        //nos permite extender la clase de configuracion
        super();
        //definimos los pasos a seguir para ejecutar nuestra app
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true, limit:"50mb"}));
        this.passportUse()
        this.dbConnect()
        this.app.use(morgan("dev"));
        this.app.use(cors({ //definimos los permisos de cors
            origin: true,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            credentials: true,
        }));
        this.app.use(helmet.xssFilter()); //previene inyeccion javascript
        this.app.use(helmet.noSniff());
        this.app.use(helmet.ieNoOpen());
        this.app.disable("x-powered-by");
        this.app.use("/api",this.routers());
        this.listen();
    };
    //metodo para definir nuestras rutas
    routers():Array<express.Router>{
        return[
            new UserRouter().router,
            new CategoryRouter().router,
            new PurchaseProductRouter().router,
            new CustomerRouter().router,
            new ProductRouter().router,
            new PurchaseRouter().router,
            new AuthRouter().router,
            new ContactRouter().router,
            new CommentRouter().router,
            new SubCommentRouter().router, 
            new ProductInfoRouter().router,
        ];
    };

    passportUse(){
        return [
            new LoginStrategy().use,
            new JwtStrategy().use        
        ];
    };
    //metodo para conectarnos a la base de datos
    async dbConnect(): Promise<DataSource | void> {
        return this.initConnect
          .then(() => {
            console.log("connection successfully!");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    //publicamos la app
    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`sever listening on port ${this.port}`);
        });
        
    };
};

//ejecutamos nuestro servidor
new ServerBootstrap();