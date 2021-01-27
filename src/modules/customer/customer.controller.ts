import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  /**
   * Method is used to fetch the list of account types
   * Account types 1. Saving 2. Current Account
   * @param req
   */
  @Get('/accounttypes')
  async getAllAccountTypes() {
    try {
      return await this.customerService.findAll();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Method is used to fetch all customers
   * @param req
   */
  @Get('/customers')
  async getAllCustomers() {
    try {
      return await this.customerService.findAllCustomer();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Used to fetch account balance using account id
   * @param accountId
   */
  @Get(':accountId/balance')
  async getAccountDetailsByAccountId(@Param('accountId') accountId) {
    try {
      const response = await this.customerService.getAccountDetailsByAccountId(
        accountId,
      );
      return { AccountBalance: response.balance };
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method is used to get the all transactions for the given account id
   * @param accountId
   */
  @Get(':accountId/transaction')
  async getTransactionDetailsByAccountId(@Param('accountId') accountId) {
    try {
      const response = await this.customerService.getTransactionDetails(
        accountId,
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Method used to create customer and account
   * Account types are 1. Saving & 2. Current account
   * @param customer
   * @param request
   */

  @Post('/')
  async createCustomer(@Body() customer: CustomerDto) {
    try {
      return await this.customerService.createCustomer(customer);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Used to update account balance based on the transaction
   * @param payload
   * @param request
   */
  @Put('/')
  async updateAccount(@Body() payload: any) {
    try {
      return await this.customerService.fetchAccountDetails(payload);
    } catch (error) {
      console.error(error);
    }
  }
}
