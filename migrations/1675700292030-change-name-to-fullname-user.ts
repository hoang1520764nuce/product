import { MigrationInterface, QueryRunner } from "typeorm";

export class changeNameToFullnameUser1675700292030 implements MigrationInterface {
    name = 'changeNameToFullnameUser1675700292030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user"
        RENAME COLUMN "name" TO "fullname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user"
        RENAME COLUMN "fullname" TO "name"`);
    }

}
