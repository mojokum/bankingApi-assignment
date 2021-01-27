import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';
import { Account } from '../account/account.entity';

@Table({ tableName: 'customer', freezeTableName: true })
export class Customer extends Model<Customer> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  contact: string;

  @Column(DataType.STRING)
  createdby: string;

  @CreatedAt
  createdon: string;

  @Column(DataType.STRING)
  updatedby: string;

  @UpdatedAt
  updatedon: string;

  @HasOne(() => Account, 'customerid')
  account: Account;
}
