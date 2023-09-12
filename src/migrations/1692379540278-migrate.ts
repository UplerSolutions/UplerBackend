import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1692379540278 implements MigrationInterface {
    name = 'Migrate1692379540278'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`quatity_product\` \`quantity_product\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchases_products\` CHANGE \`quantity_product\` \`quatity_product\` int NOT NULL`);
    }

}
