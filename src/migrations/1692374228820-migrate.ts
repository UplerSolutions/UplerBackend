import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1692374228820 implements MigrationInterface {
    name = 'Migrate1692374228820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP COLUMN \`payment_method\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD \`payment_method\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`purchase\` DROP COLUMN \`payment_method\``);
        await queryRunner.query(`ALTER TABLE \`purchase\` ADD \`payment_method\` int NOT NULL`);
    }

}
