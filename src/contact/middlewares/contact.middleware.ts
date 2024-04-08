import { Request, Response, NextFunction } from "express";
import { ContactDTO } from "../dto/contact.dto";
import { validate } from "class-validator";
import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";

export class ContactMiddleware extends SharedMiddleware{
    constructor(
    ) {super()}
    contactValidator(req: Request, res: Response, next: NextFunction) {
      const { name, lastname, email,companyName, position, website, productName, productCategory, productDescription } =
        req.body;
  
      const valid = new ContactDTO();
  
      valid.name = name;
      valid.lastname = lastname;
      valid.email = email;
      valid.companyName = companyName;
      valid.position = position;
      valid.website = website;
      valid.productName = productName;
      valid.productCategory = productCategory;
      valid.productDescription = productDescription;

      validate(valid).then((err) => {
        if (err.length > 0) {
          return this.httpResponse.InternalServerError(res, err);
        } else {
          next();
        }
      });
    }
  }