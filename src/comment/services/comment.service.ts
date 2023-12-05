import { DeleteResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { CommentEntity } from "../entities/comment.entity";
import { CommentDTO } from "../dto/comment.dto";




export class CommentService extends BaseService<CommentEntity> {
  constructor() {
    super(CommentEntity);
  }
  async findCommentByProduct(product: string): Promise<CommentEntity[] | null> {
    return (await this.execRepository).find({ 
        where: [
            {
              product: {productName:product}
            }
          ],
     });
  }

  async createComment(body: CommentDTO): Promise<CommentEntity> {
    return (await this.execRepository).save(body);
  }

  async deleteComment(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

}