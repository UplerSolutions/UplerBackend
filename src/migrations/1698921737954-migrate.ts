import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1698921737954 implements MigrationInterface {
    name = 'Migrate1698921737954'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`founder_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`founder_image\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`founder_description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`linkdin\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`linkdin\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`founder_description\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`founder_image\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`founder_name\``);
    }

}
