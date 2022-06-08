/* exported Account */
/*
declare a constructor and return to its parameter, set transactions to an empty array
for deposit:
if the amout is bigger than 0 and its an integer, create a new transaction object and passing 'deposit' and amount as argument
then push into account.transactions
if the amount is smaller than 0 or its not an integer, return false;
for withdrawal:
same method with the deposit except passing 'withdrawal' as argument instead of 'deposit'
for getBalance:
if no transaction return 0
else loop through account.transaction, if the type ==='deposit' get the sum of deposit
then use other loop to loop through account.transaction again, if type ==='withdrawal', get the sum of withdrawal
return deposit-withdrawals
*/
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newTransactionForD = new Transaction('deposit', amount);
    this.transactions.push(newTransactionForD);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newTransactionForW = new Transaction('withdrawal', amount);
    this.transactions.push(newTransactionForW);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var deposit = 0;
  var withdrawal = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    }
  }
  for (var j = 0; j < this.transactions.length; j++) {
    if (this.transactions[j].type === 'withdrawal') {
      withdrawal += this.transactions[j].amount;
    }
  }
  var balance = deposit - withdrawal;
  return balance;
};
