export class TransactionDetailDto {
  public id: number;
  public accountid: number;
  public beneficiary: number;
  public amount: number;
  public transactiontype: number;
  public createdby: string;
  public createdon: Date;
  public updatedby: string;
  public updatedon: Date;
}
