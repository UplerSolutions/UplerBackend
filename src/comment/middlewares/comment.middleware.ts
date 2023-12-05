import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.status.response"
import { CommentDTO } from "../dto/comment.dto";

export class CommentMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  categoryValidator(req: Request, res: Response, next: NextFunction) {
    const { comment } = req.body;

    const valid = new CommentDTO();

    valid.comment = comment;
    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err);
      } else {
        next();
      }
    });
  }
}