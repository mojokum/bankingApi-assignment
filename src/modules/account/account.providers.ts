import { Account } from './account.entity';
import { ACCOUNT_REPOSITORY } from './../../constants';

export const AccountProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useValue: Account,
  },
];
