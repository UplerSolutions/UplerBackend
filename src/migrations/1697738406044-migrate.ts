import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1697738406044 implements MigrationInterface {
    name = 'Migrate1697738406044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`diirect_link\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`direct_link\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`image_url\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`image_url\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`direct_link\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`diirect_link\` varchar(255) NOT NULL`);
    }

}
