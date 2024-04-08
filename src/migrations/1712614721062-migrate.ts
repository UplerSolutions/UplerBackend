import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1712614721062 implements MigrationInterface {
    name = 'Migrate1712614721062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "enterprise"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "company_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "website" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "product_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "product_category" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "product_description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "product_description"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "product_category"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "product_name"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "company_name"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "message" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "enterprise" character varying NOT NULL`);
    }

}
