export class Transaction
{
    private transactionId:number;
    private amount:number;
    private transactionType:string;

    constructor(transactionId:number,amount:number,transactionType:string)
    {
        this.transactionId=transactionId;
        this.amount=amount;
        this.transactionType=transactionType;
    }

    displayTransaction():void
    {
        console.log(`Transaction Id:${this.transactionId},Amount:${this.amount},Type:${this.transactionType}`);
    }

    isCredit():boolean
    {
        return this.transactionType==="Credit";
    }
}
const sampleTransaction=new Transaction(1,3000,"Credit");
sampleTransaction.displayTransaction();
if(sampleTransaction.isCredit())
{
    console.log("Amount is credited");
}
else
{
    console.log("Amount is not credited");
}