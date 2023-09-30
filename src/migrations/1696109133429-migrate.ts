import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1696109133429 implements MigrationInterface {
    name = 'Migrate1696109133429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`adress\` \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`address\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`address\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`address\` \`adress\` varchar(255) NOT NULL`);
    }

}
