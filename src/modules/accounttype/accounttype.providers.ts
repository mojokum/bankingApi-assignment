import { AccountType } from './accounttype.entity';
import { ACCOUNTTYPE_REPOSITORY } from './../../constants';

export const AccountTyperProviders = [
  {
    provide: ACCOUNTTYPE_REPOSITORY,
    useValue: AccountType,
  },
];
