import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1700420538692 implements MigrationInterface {
    name = 'Migrate1700420538692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`long_description\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`long_description\` varchar(2500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`long_description\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`long_description\` varchar(255) NOT NULL`);
    }

}
