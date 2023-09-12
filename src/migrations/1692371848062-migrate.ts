import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1692371848062 implements MigrationInterface {
    name = 'Migrate1692371848062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`street_adrees\` \`street_adrees\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`number_phone\` \`number_phone\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`number_phone\` \`number_phone\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`street_adrees\` \`street_adrees\` varchar(255) NOT NULL`);
    }

}
