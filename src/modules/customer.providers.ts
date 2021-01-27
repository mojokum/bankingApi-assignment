import { CUSTOMER_REPOSITORY } from './../constants';
import { Customer } from './customer/customer.entity';

export const CustomerProviders = [
  {
    provide: CUSTOMER_REPOSITORY,
    useValue: Customer,
  },
];
