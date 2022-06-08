/* exported Bank */
/*
declare a constructor and inititial nextAccountNumber to 1 and account to empty array
for openAccount:
if the balance bigger than 0 and its an integer, create a new account object and passing nextAccountNumber and holder as argument
call deposite prototype function in the new account object to deposite the balance
push the new account to the accounts array of Bank property and increment the next account number
return to current account number
if the balance is smaller than 0 and its not an integer, return null
for getAccount:
loop through the accounts array, if the account number is found return to that account
else if not found, return null
for getTotalAssets:
if no account in accounts array return 0
else loop through the account array and get sum of all account balance by calling getBalance
prototype function in Account.
*/
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};
Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) { return this.accounts[i]; }
  }
  return null;
};
Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) return 0;
  var sum = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    sum += this.accounts[i].getBalance();
  }
  return sum;
};
