import { validate } from 'class-validator'
import { NextFunction, Request, Response } from 'express'
import { HttpResponse } from '../../shared/response/http.status.response'
import { ProductDTO } from '../dto/product.dto'

export class ProductMiddleware {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  productValidator(req: Request, res: Response, next: NextFunction) {
    const {
      productName,
      lowDescription,
      category,
      price,
      longDescription,
      seller
    } = req.body

    const valid = new ProductDTO()
    valid.productName = productName
    valid.LowDescription = lowDescription
    valid.LongDescription = longDescription
    valid.category = category
    valid.price = price
    valid.seller = seller

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err)
      } else {
        next()
      }
    })
  }
}
