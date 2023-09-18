import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { UserEntity } from "../entities/user.entity";
import { RoleType, UserDTO } from "../dto/user.dto";
import * as bcrypt from "bcrypt";

export class UserService extends BaseService<UserEntity>{
    constructor(){
        super(UserEntity);
    };
    async findAll():Promise<UserEntity[]>{
        return (await this.execRepository).find();
    };
    async findUserById(id: string): Promise<UserEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    };
    
    async findUserWithRole(id:string,role:RoleType):Promise<UserEntity | null>{
        return (await this.execRepository).createQueryBuilder("user")
        .where({ id })
        .andWhere({ role })
        .getOne();
    }
    
    async findUserWithRelation(id: string): Promise<UserEntity | null> {
        return (await this.execRepository).createQueryBuilder("user")
        .leftJoinAndSelect("user.customer", "customer")
        .where({ id })
        .getOne();
    }
    async createUser(body:UserDTO):Promise<UserEntity>{
        const newUser=(await this.execRepository).create(body); //guardamos en memoria (thompson puto)
        const hash = await bcrypt.hash(newUser.password, 10);   // encriptamos la contraseña
        newUser.password = hash;                                //almacenamos la contraseña encriptada en el objeto
        return (await this.execRepository).save(newUser);
    };

    async findUserByEmail(email: string): Promise<UserEntity | null> {
        return (await this.execRepository)
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where({ email })
        .getOne();
    }; 
    
    async findUserByUsername(username: string): Promise<UserEntity | null> {
        return (await this.execRepository)
        .createQueryBuilder("user")
        .addSelect("user.password")
        .where({ username })
        .getOne();
    
    };

    async deleteUser(id:string):Promise<DeleteResult>{
        return (await this.execRepository).delete({id});
    };

    async updateUser(id:string,infoUpdate:UserDTO):Promise<UpdateResult>{
        return (await this.execRepository).update(id,infoUpdate);
    };
};