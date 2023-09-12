import { Entity,Column } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({name:'contact'})
export class ContactEntity extends BaseEntity{
    @Column()
    name!:string;

    @Column()
    lastname!:string;

    @Column()
    enterprise!:string;

    @Column()
    email!:string;

    @Column()
    phone!:string;

    @Column()
    message!:string;
}