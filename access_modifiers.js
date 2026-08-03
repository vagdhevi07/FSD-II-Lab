"use strict";
//Public, Private and Protected
class BankAccount {
    holder;
    balance;
    bank;
    constructor(holder, balance) {
        this.holder = holder;
        this.balance = balance;
        this.bank = "SBI";
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
const acc = new BankAccount("Priya", 10000);
console.log(acc.holder);
acc.showBalance();
