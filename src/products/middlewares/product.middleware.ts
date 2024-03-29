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
      directLink,
      seller,
      imageUrl,
      founderName,
      founderImage,
      founderDescription,
      linkdin
    } = req.body

    const valid = new ProductDTO()
    valid.productName = productName
    valid.lowDescription = lowDescription
    valid.longDescription = longDescription
    valid.category = category
    valid.price = price
    valid.directLink = directLink
    valid.seller = seller
    valid.imageUrl = imageUrl
    valid.founderName = founderName
    valid.founderImage = founderImage
    valid.founderDescription = founderDescription
    valid.linkdin = linkdin

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.InternalServerError(res, err)
      } else {
        next()
      }
    })
  }
}
