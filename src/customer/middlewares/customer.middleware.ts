import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.status.response";
import { CustomerDTO } from "../dto/customer.dto";

export class CustomerMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  customerValidator(req: Request, res: Response, next: NextFunction) {
    const { address, dni, user } = req.body;
    const valid = new CustomerDTO();
    valid.address = address;
    valid.dni = dni;
    valid.user = user;
    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err);
      } else {
        next();
      }
    });
  }
}