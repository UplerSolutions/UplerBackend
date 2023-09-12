import { UserService } from "../../user/services/user.service";
import { ConfigServer } from "../../config/config";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { UserEntity } from "../../user/entities/user.entity";
import { PayloadToken } from "../interfaces/auth.interface";
import { RoleType } from "../../user/dto/user.dto";




export class AuthService extends ConfigServer{
    constructor(
        private readonly userService:UserService=new UserService(),
        private readonly jwtInstance=jwt)
    {
        super()
    }   
    public async validateUser(username:string,password:string):Promise<UserEntity|null>{
        const userByEmail=await this.userService.findUserByEmail(username);
        const userByUsername=await this.userService.findUserByUsername(username);
        if(userByUsername){
            const isMatch=await bcrypt.compare(password,userByUsername.password);
            isMatch&&userByUsername; //if y return
        };
        if(userByEmail){
            const isMatch=await bcrypt.compare(password,userByEmail.password);
            isMatch&&userByEmail; //if y return
        };
        return null
    }

    public sing(payload:jwt.JwtPayload,secret:any){
        return this.jwtInstance.sign(payload,secret,{expiresIn:"1h"})
    }

    public async generateJwt(user:UserEntity):Promise<{accessToken:string; user:UserEntity}>{
        const userConsult=await this.userService.findUserWithRole(user.id,user.role as RoleType)
        const payload:PayloadToken={
            role:userConsult!.role as RoleType,
            sub:userConsult!.id
        }
        userConsult&&(user.password="Not permission") //if y denegacion de password en caso de q sea falso
        return {
            accessToken:this.sing(payload, this.getEnviroment("JWT_SECRET")),
            user
        
        }
    }

}
