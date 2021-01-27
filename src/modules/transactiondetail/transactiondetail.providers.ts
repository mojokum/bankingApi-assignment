import { TRANSACTIONDETAIL_REPOSITORY } from './../../constants';
import { TransactionDetail } from './transactiondetail.entity';

export const TransactionDetailProviders = [
  {
    provide: TRANSACTIONDETAIL_REPOSITORY,
    useValue: TransactionDetail,
  },
];
