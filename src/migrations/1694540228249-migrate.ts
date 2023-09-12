import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1694540228249 implements MigrationInterface {
    name = 'Migrate1694540228249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`postal_code\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`postal_code\` int NULL`);
    }

}
