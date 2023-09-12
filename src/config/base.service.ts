import { EntityTarget, Repository, ObjectLiteral} from "typeorm";
import { BaseEntity } from "./base.entity";
import { ConfigServer } from "./config";

export class BaseService<ObjectLiteral extends BaseEntity> extends ConfigServer {
  public execRepository: Promise<Repository<ObjectLiteral>>;
  constructor(private getEntity: EntityTarget<ObjectLiteral>) {
    super();
    this.execRepository = this.initRepository(getEntity);
  }

  async initRepository<T>(e: EntityTarget<ObjectLiteral>): Promise<Repository<ObjectLiteral>> {
    const getConn = await this.initConnect;
    return getConn.getRepository(e);
  }
}