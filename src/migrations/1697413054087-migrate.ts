import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1697413054087 implements MigrationInterface {
    name = 'Migrate1697413054087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`stock\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`low_description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`long_description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`seller\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`diirect_link\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`rating\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`rating\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`diirect_link\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`seller\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`long_description\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`low_description\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`stock\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`description\` varchar(255) NOT NULL`);
    }

}
