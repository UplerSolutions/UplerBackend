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
        from: 'contacto@upler.dev',
        to: 'mlonzayes.ml@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
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