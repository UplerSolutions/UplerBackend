import { Request, Response } from "express";
import { ContactService } from "../services/contact.service";
import { transporter } from "../helper/mailer";
import { Resend } from "resend";

export class ContactController {
  constructor(
    private readonly categoryService: ContactService = new ContactService()
  ) {}
  async getContact(req: Request, res: Response) {
    try {
      const data = await this.categoryService.findAllCategoties();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getContactById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.findCategoryById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createContact(req: Request, res: Response) {
    try {
      const data = await this.categoryService.createCategory(req.body);
      const resend = new Resend(process.env.RESEND_API_KEY);
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'serafinkocho@gmail.com',
        subject: 'Contacto para ingreso upler',
        html: `<p>Hola Upler, alguien quiere unirse a la empresa! aqui estan sus datos para que lo contactes:</p>
              Nombre y Apelido:${req.body.name} ${req.body.lastname},
              Company:${req.body.companyName},
              Position:${req.body.position},
              Email:${req.body.email},
              Website:${req.body.website},
              Producto:${req.body.productName},
              Tipo de Producto:${req.body.productCategory},
              Descripcion del Producto:${req.body.productDescription}`
              
      });
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateContact(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.updateCategory(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteContact(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.deleteCategory(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}