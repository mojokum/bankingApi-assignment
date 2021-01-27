import { Injectable, Inject } from '@nestjs/common';
import { AccountType } from '../accounttype/accounttype.entity';
import {
  ACCOUNTTYPE_REPOSITORY,
  ACCOUNT_REPOSITORY,
  CUSTOMER_REPOSITORY,
  TRANSACTIONDETAIL_REPOSITORY,
} from '../../constants';
import { Customer } from './customer.entity';
import { CustomerDto } from './dto/customer.dto';
import { Account } from '../account/account.entity';
import { TransactionDetail } from '../transactiondetail/transactiondetail.entity';
import { TransactionDetailDto } from './dto/transactiondetails.dto';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(ACCOUNTTYPE_REPOSITORY)
    private readonly accountTypeRepository: typeof AccountType,
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepository: typeof Customer,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepository: typeof Account,
    @Inject(TRANSACTIONDETAIL_REPOSITORY)
    private readonly transactionDetail: typeof TransactionDetail,
  ) {}

  /**
   * Method used to fetch the account types
   */
  async findAll(): Promise<AccountType[]> {
    return await this.accountTypeRepository.findAll();
  }

  /**
   * Method used to fetch all customers
   */
  async findAllCustomer(): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }

  /**
   * Used to fetch account details by account id
   * @param accountId
   */
  async getAccountDetailsByAccountId(accountId): Promise<any> {
    const response = await this.accountRepository.findOne<Account>({
      where: { id: accountId },
    });
    return response;
  }

  /**
   * Fetch account details by account id
   * @param accountId
   */
  async getTransactionDetails(accountId): Promise<any> {
    const response = await this.transactionDetail.findAll({
      where: { accountid: accountId },
    });
    return response;
  }

  /**
   * method used to update amount during transaction between amount
   * @param payload
   */
  async fetchAccountDetails(payload): Promise<any> {
    const fromAccount = await this.accountRepository.findOne<Account>({
      where: { id: payload.fromAccount },
    });
    const toAccount = await this.accountRepository.findOne<Account>({
      where: { id: payload.toAccount },
    });
    const accountholderAmount =
      parseInt(fromAccount.balance.toString(), 0) - payload.transferAmount;
    const beneficiaryAmount =
      parseInt(toAccount.balance.toString(), 0) + payload.transferAmount;

    const transferDetails = new TransactionDetailDto();
    transferDetails.accountid = fromAccount.id;
    transferDetails.amount = payload.transferAmount;
    transferDetails.transactiontype = 2;
    transferDetails.beneficiary = toAccount.id;
    transferDetails.createdby = 'sys';
    await this.accountRepository.update(
      { balance: accountholderAmount },
      { where: { id: fromAccount.id } },
    );
    await this.transactionDetail.create(transferDetails);
    await this.accountRepository.update(
      { balance: beneficiaryAmount },
      { where: { id: toAccount.id } },
    );
    transferDetails.transactiontype = 1;
    await this.transactionDetail.create(transferDetails);
    return 'Transfered Successfully';
  }

  /**
   * Method used to create customer
   * @param customer
   */
  async createCustomer(customer: CustomerDto): Promise<any> {
    const customerResponse = await this.customerRepository.findOne<Customer>({
      where: { email: customer.email },
      include: [
        {
          model: Account,
          where: { accountype: customer.account.accountype },
          required: false,
        },
      ],
    });
    if (!customerResponse) {
      const result = await this.customerRepository.create(customer, {
        include: [Account],
      });
      const response = result.save();
      return response;
    } else if (!customerResponse.account) {
      Object.assign(customer.account, { customerid: customerResponse.id });
      const account = await this.accountRepository.create(customer.account);
      return account;
    }
    return customerResponse;
  }
}
