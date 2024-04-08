import { BaseRouter } from "../shared/router/router";
import { ContactController } from "./controllers/contact.controller";
import { ContactMiddleware } from "./middlewares/contact.middleware";



export class ContactRouter extends BaseRouter<
  ContactController,
  ContactMiddleware
> {
  constructor() {
    super(ContactController, ContactMiddleware);
  }

  routes(): void {
    this.router.get("/getContacts", (req, res) =>
      this.controller.getContact(req, res)
    );
    this.router.get("/getContact/:id", (req, res) =>
      this.controller.getContactById(req, res)
    );
    this.router.post(
      "/createContact",
      (req, res, next) => [
        this.middleware.contactValidator(req, res, next),
      ],
      (req, res) => this.controller.createContact(req, res)
    );
    this.router.put("/updateContact/:id", (req, res) =>
      this.controller.updateContact(req, res)
    );
    this.router.delete("/deleteContact/:id", (req, res) =>
      this.controller.deleteContact(req, res)
    );
  }
}