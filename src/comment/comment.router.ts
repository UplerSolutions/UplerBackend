import { BaseRouter } from "../shared/router/router";
import { CommentController } from "./controllers/comment.controller";
import { CommentMiddleware } from "./middlewares/comment.middleware";


export class CommentRouter extends BaseRouter<
  CommentController,
  CommentMiddleware
> {
  constructor() {
    super(CommentController, CommentMiddleware);
  }

  routes(): void {
    this.router.get("/productComment/:id", (req, res) =>
      this.controller.getCommentsByproduct(req, res)
    );
    this.router.post(
      "/createComment",
      (req, res, next) => [this.middleware.categoryValidator(req, res, next)],
      (req, res) => this.controller.createComment(req, res)
    );
    this.router.delete("/deleteComment/:id", (req, res) =>
      this.controller.deleteComment(req, res)
    );
  }
}