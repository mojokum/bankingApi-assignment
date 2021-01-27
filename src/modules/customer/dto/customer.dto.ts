import { AccountDto } from './account.dto';

export class CustomerDto {
  public id: number;
  public name: string;
  public email: string;
  public contact: string;
  public createdby: string;
  public createdon: Date;
  public updatedby: string;
  public updatedon: Date;
  public account: AccountDto;
}
