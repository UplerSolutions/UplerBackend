import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { HttpResponse } from '../../shared/response/http.status.response'
import { ProductInfoDTO } from '../dto/products.info.dto'

export class ProductInfoMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  productValidator(req: Request, res: Response, next: NextFunction) {
    const {
      features
    } = req.body

    const valid = new ProductInfoDTO()
    valid.features = features
    

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err)
      } else {
        next()
      }
    })
  }
}
