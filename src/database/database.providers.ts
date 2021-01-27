import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT } from '../constants';
import { databaseConfig } from './database.config';
import { AccountType } from '../modules/accounttype/accounttype.entity';
import { Customer } from 'src/modules/customer/customer.entity';
import { Account } from 'src/modules/account/account.entity';
import { TransactionDetail } from 'src/modules/transactiondetail/transactiondetail.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([AccountType, Customer, Account, TransactionDetail]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
