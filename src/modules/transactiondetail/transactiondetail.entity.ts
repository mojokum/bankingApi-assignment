import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'transactiondetail', freezeTableName: true })
export class TransactionDetail extends Model<TransactionDetail> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  accountid: number;

  @Column(DataType.INTEGER)
  beneficiary: number;

  @Column(DataType.DECIMAL)
  amount: number;

  @Column(DataType.INTEGER)
  transactiontype: number;

  @Column(DataType.STRING)
  createdby: string;

  @CreatedAt
  createdon: string;

  @Column(DataType.STRING)
  updatedby: string;

  @UpdatedAt
  updatedon: string;
}
