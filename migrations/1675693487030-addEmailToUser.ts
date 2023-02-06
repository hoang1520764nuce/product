import { MigrationInterface, QueryRunner } from "typeorm";

export class addEmailToUser1675693487030 implements MigrationInterface {
    name = 'addEmailToUser1675693487030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`AlTER TABLE "user" ADD "email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`AlTER TABLE "user" DROP COLUMN "email" `);
    }

}
