import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyToPurchase1605194905779
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'purchase',
      new TableForeignKey({
        name: 'PurchaseClient',
        columnNames: ['client_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'clients',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'purchase',
      new TableForeignKey({
        name: 'PurchaseItem',
        columnNames: ['item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'itens',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('purchase', 'PurchaseClient');
    await queryRunner.dropForeignKey('purchase', 'PurchaseItem');
  }
}
