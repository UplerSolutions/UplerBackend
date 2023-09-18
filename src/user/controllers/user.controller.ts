import {Request,Response} from "express"
import { UserService } from "../services/user.service"
import { HttpResponse } from "../../shared/response/http.status.response";
import { DeleteResult, UpdateResult } from "typeorm";
export class UserController{
    constructor(
      private readonly userService:UserService=new UserService(),
      private readonly httpResponse:HttpResponse=new HttpResponse()
      ){}
    
    async getUsers(req:Request,res:Response){
      try{
        const data=await this.userService.findAll();
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };
    async getUserWithRelationById(req:Request,res:Response){
      const {id}=req.params;
      try{
        const data=await this.userService.findUserWithRelation(id);
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    }
    async getUsersById(req:Request,res:Response){
      try{
        const {id}=req.params; 
        const data=await this.userService.findUserById(id);
        return this.httpResponse.Ok(res,data)
      }catch(e){
        return this.httpResponse.InternalServerError(res,e)
      }
    };

    async createUsers(req:Request,res:Response){
        try{

          const data=await this.userService.createUser(req.body);
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async updateUser(req:Request,res:Response){
        try{
          const {id}=req.params;
          const data:UpdateResult=await this.userService.updateUser(id,req.body);
          if(!data.affected)return this.httpResponse.InternalServerError(res,"Update error!")
          return this.httpResponse.Ok(res,data)
        }catch(e){
          return this.httpResponse.InternalServerError(res,e)
        }
    };

    async deleteUsers(req:Request,res:Response){
        try{
            const {id}=req.params;
            const data:DeleteResult=await this.userService.deleteUser(id);
            if (!data.affected)return this.httpResponse.InternalServerError(res,"Delete error!")
            return this.httpResponse.Ok(res,data)
        }catch(e){
            return this.httpResponse.InternalServerError(res,e)
        }};
    

    
}