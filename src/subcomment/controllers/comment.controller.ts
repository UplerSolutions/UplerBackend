import { Request, Response } from "express";
import { SubCommentService } from "../services/comment.service";
import { HttpResponse } from "../../shared/response/http.status.response";


export class SubCommentController {
  constructor(
    private readonly categoryService: SubCommentService = new SubCommentService(),
    private readonly httpResponse:HttpResponse=new HttpResponse()
  ) {}

  async getSubCommentsByComment(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.findCommentByComment(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
  }
  async createSubComment(req: Request, res: Response) {
    try {
      const data = await this.categoryService.createComment(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
    
  }
  async deleteSubComment(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.deleteComment(id);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.InternalServerError(res, e);
    }
  }
}