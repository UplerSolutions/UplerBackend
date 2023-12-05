import { Request, Response } from "express";
import { CommentService } from "../services/comment.service";
import { HttpResponse } from "../../shared/response/http.status.response";


export class CommentController {
  constructor(
    private readonly categoryService: CommentService = new CommentService(),
    private readonly httpResponse:HttpResponse=new HttpResponse()
  ) {}

  async getCommentsByproduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.findCommentByProduct(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
  }
  async createComment(req: Request, res: Response) {
    try {
      const data = await this.categoryService.createComment(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
    
  }

  async deleteComment(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.deleteComment(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
  }
}