"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(transactionId, amount, transactionType) {
        this.transactionId = transactionId;
        this.amount = amount;
        this.transactionType = transactionType;
    }
    Transaction.prototype.displayTransaction = function () {
        console.log("Transaction Id:".concat(this.transactionId, ",Amount:").concat(this.amount, ",Type:").concat(this.transactionType));
    };
    Transaction.prototype.isCredit = function () {
        return this.transactionType === "Credit";
    };
    return Transaction;
}());
exports.Transaction = Transaction;
var sampleTransaction = new Transaction(1, 3000, "Credit");
sampleTransaction.displayTransaction();
if (sampleTransaction.isCredit()) {
    console.log("Amount is credited");
}
else {
    console.log("Amount is not credited");
}
