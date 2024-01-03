import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1704304831980 implements MigrationInterface {
  name = 'CreateUser1704304831980';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "my_schema"."users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "my_schema"."users"`);
  }
}
