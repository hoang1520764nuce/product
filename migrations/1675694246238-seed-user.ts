import { MigrationInterface, QueryRunner } from "typeorm";

export class seedUser1675694246238 implements MigrationInterface {
    name = 'seedUser1675694246238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "user" ("name", "email")
            SELECT 'admin', 'admin@gmail.com'`);
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "user" u WHERE u.name = 'admin' ;`,);
    }

}
