import { Column, Entity, OneToMany} from "typeorm";
import { BaseEntity } from "../../config/base.entity"
import { CommentEntity } from "../../comment/entities/comment.entity";

@Entity({name:'subcomments'})
export class SubCommentEntity extends BaseEntity{
    @Column()
    subcomment!:string;

    @OneToMany(()=>CommentEntity,(comment)=>comment.comment)
    comment!:CommentEntity[]
    
}
