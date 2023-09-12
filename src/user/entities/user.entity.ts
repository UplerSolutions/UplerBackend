import { Column, Entity, OneToOne} from "typeorm";
import { BaseEntity } from "../../config/base.entity"
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { RoleType } from "../dto/user.dto";


@Entity({name:'user'})
export class UserEntity extends BaseEntity{
    @Column()
    username!:string;
    
    @Column({length:1000})
    name!:string;
    
    @Column()
    lastname!:string;

    @Column()
    email!:string;
    

    @Column({select: false})
    password!:string
    
    @Column()
    city!:string;

    @Column()
    province!:string;

    @Column({type:"enum",enum:RoleType,nullable:false})
    role!:string;
    
    @Column({nullable:true})
    street_adrees!:string;

    @Column({nullable:true})
    number_phone!:number;

    @OneToOne(()=> CustomerEntity,(customer)=>customer.user)
    customer!:CustomerEntity;



}