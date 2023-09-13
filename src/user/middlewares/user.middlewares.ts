import { Request, Response, NextFunction } from "express";
import { UserDTO } from "../dto/user.dto";
import { validate } from "class-validator";
import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";

export class UserMiddleware extends SharedMiddleware{
    constructor(
    ) {super()}
    userValidator(req: Request, res: Response, next: NextFunction) {
      const { name, lastname, username, email, password, city, province, role,street_adrees,number_phone } =
        req.body;
  
      const valid = new UserDTO();
  
      valid.name = name;
      valid.lastname = lastname;
      valid.username = username;
      valid.email = email;
      valid.password = password;
      valid.city = city;
      valid.province = province;
      valid.role = role;
      valid.street_adrees = street_adrees;
      valid.number_phone = number_phone;
      validate(valid).then((err) => {
        if (err.length > 0) {
          return this.httpResponse.InternalServerError(res, err);
        } else {
          next();
        }
      });
    }
  }
        
    

