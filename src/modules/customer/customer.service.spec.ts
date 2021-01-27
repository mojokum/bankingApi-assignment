import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerProviders } from '../customer.providers';
import { AccountProviders } from '../account/account.providers';
import { AccountTyperProviders } from '../accounttype/accounttype.providers';
import { TransactionDetailProviders } from '../transactiondetail/transactiondetail.providers';

describe('CustomerService', () => {
  let service: CustomerService;
  let customerController: CustomerController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        CustomerService,
        { provide: Customer, useValue: {} },
        ...CustomerProviders,
        ...AccountTyperProviders,
        ...AccountProviders,
        ...TransactionDetailProviders,
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    customerController = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(customerController).toBeDefined();
  });
});
