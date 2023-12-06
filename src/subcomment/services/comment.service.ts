import { DeleteResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { SubCommentEntity } from "../entities/comment.entity";
import { SubCommentDTO } from "../dto/comment.dto";




export class SubCommentService extends BaseService<SubCommentEntity> {
  constructor() {
    super(SubCommentEntity);
  }
  async findCommentByComment(id: string): Promise<SubCommentEntity[] | null> {
    return (await this.execRepository).find({ 
        where: [
            {
              comment: {comment:id}
            }
          ],
     });
  }

  async createComment(body: SubCommentDTO): Promise<SubCommentEntity> {
    return (await this.execRepository).save(body);
  }

  async deleteComment(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

}