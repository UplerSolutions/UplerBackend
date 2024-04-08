import { Entity,Column } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({name:'contact'})
export class ContactEntity extends BaseEntity{
    @Column()
    name!:string;

    @Column()
    lastname!:string;

    @Column()
    email!:string;

    @Column()
    position!:string;

    @Column()
    companyName!:string;

    @Column()
    website!:string;

    @Column()
    productName!:string

    @Column()
    productCategory!:string;

    @Column()
    productDescription!:string;
}