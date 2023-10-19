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
      longDescription,
      category,
      price,
      seller,
      directLink,
      imageUrl
    } = req.body

    const valid = new ProductDTO()
    valid.productName = productName
    valid.lowDescription = lowDescription
    valid.longDescription = longDescription
    valid.category = category
    valid.price = price
    valid.seller = seller
    valid.directLink = directLink
    valid.imageUrl = imageUrl

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err)
      } else {
        next()
      }
    })
  }
}
