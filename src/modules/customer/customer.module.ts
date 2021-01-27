import { Module } from '@nestjs/common';
import { CustomerService } from '.././customer/customer.service';
import { AccountProviders } from '../account/account.providers';
import { AccountTyperProviders } from '../accounttype/accounttype.providers';
import { CustomerProviders } from '../customer.providers';
import { TransactionDetailProviders } from '../transactiondetail/transactiondetail.providers';
import { CustomerController } from './customer.controller';

@Module({
  providers: [
    CustomerService,
    ...CustomerProviders,
    ...AccountTyperProviders,
    ...AccountProviders,
    ...TransactionDetailProviders,
  ],
  controllers: [CustomerController],
})
export class CustomerModule {}
