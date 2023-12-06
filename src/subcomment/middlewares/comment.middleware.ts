import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.status.response"
import { SubCommentDTO } from "../dto/comment.dto";

export class SubCommentMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  categoryValidator(req: Request, res: Response, next: NextFunction) {
    const { subcomment } = req.body;

    const valid = new SubCommentDTO();

    valid.subcomment = subcomment;
    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err);
      } else {
        next();
      }
    });
  }
}