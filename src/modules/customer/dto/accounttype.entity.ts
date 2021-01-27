import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'accounttype', freezeTableName: true })
export class AccountType extends Model<AccountType> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  isactive: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  createdby: string;

  @CreatedAt
  createdon: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  updatedby: string;

  @UpdatedAt
  updatedon: string;
}
