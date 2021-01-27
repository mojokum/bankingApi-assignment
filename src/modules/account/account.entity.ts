import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript';
import { AccountType } from '../accounttype/accounttype.entity';

import { Customer } from '../customer/customer.entity';

@Table({ tableName: 'account', freezeTableName: true })
export class Account extends Model<Account> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  customerid: number;

  @ForeignKey(() => AccountType)
  @Column(DataType.INTEGER)
  accountype: number;

  @Column(DataType.DECIMAL)
  balance: number;

  @Column(DataType.STRING)
  createdby: string;

  @CreatedAt
  createdon: string;

  @Column(DataType.STRING)
  updatedby: string;

  @UpdatedAt
  updatedon: string;
}
