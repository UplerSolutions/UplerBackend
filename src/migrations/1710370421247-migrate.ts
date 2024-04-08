import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1710370421247 implements MigrationInterface {
    name = 'Migrate1710370421247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "features" character varying NOT NULL, CONSTRAINT "PK_ad6df2f64860f13fcf2cbe38dc6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_info"`);
    }

}
