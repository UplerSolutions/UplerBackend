import { ContactEntity } from "../entities/contact.entity";
import { BaseService } from "../../config/base.service";
import { ContactDTO } from "../dto/contact.dto";
import { DeleteResult, UpdateResult } from "typeorm";


export class ContactService extends BaseService<ContactEntity> {
    constructor() {
      super(ContactEntity);
    }
  
    async findAllCategoties(): Promise<ContactEntity[]> {
      return (await this.execRepository).find();
    }
    async findCategoryById(id: string): Promise<ContactEntity | null> {
      return (await this.execRepository).findOneBy({ id });
    }
    async createCategory(body: ContactDTO): Promise<ContactEntity> {
      return (await this.execRepository).save(body);
    }
    async deleteCategory(id: string): Promise<DeleteResult> {
      return (await this.execRepository).delete({ id });
    }
    async updateCategory(
      id: string,
      infoUpdate: ContactDTO
    ): Promise<UpdateResult> {
      return (await this.execRepository).update(id, infoUpdate);
    }
  }