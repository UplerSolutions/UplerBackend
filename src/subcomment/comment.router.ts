import { BaseRouter } from "../shared/router/router";
import { SubCommentController } from "./controllers/comment.controller";
import { SubCommentMiddleware } from "./middlewares/comment.middleware";


export class SubCommentRouter extends BaseRouter<
  SubCommentController,
  SubCommentMiddleware
> {
  constructor() {
    super(SubCommentController, SubCommentMiddleware);
  }

  routes(): void {
    this.router.get("/getSubComments/:id", (req, res) =>
      this.controller.getSubCommentsByComment(req, res)
    );
    this.router.post(
      "/createSubComment",
      (req, res, next) => [this.middleware.categoryValidator(req, res, next)],
      (req, res) => this.controller.createSubComment(req, res)
    );
    this.router.delete("/deleteSubComment/:id", (req, res) =>
      this.controller.deleteSubComment(req, res)
    );
  }
}