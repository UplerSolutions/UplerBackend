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
    this.router.get("/purchaseProducts", (req, res) =>
      this.controller.getContact(req, res)
    );
    this.router.get("/purchaseProduct/:id", (req, res) =>
      this.controller.getContactById(req, res)
    );
    this.router.post(
      "/createPurchaseProduct",
      (req, res, next) => [
        this.middleware.contactValidator(req, res, next),
      ],
      (req, res) => this.controller.createContact(req, res)
    );
    this.router.put("/updatePurchaseProduct/:id", (req, res) =>
      this.controller.updateContact(req, res)
    );
    this.router.delete("/deletePurchaseProduct/:id", (req, res) =>
      this.controller.deleteContact(req, res)
    );
  }
}