class BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }

    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }

    displayBalance() {
        console.log("Balance =", this.balance);
    }
}

let account = new BankAccount(5000);

account.deposit(1000);
account.withdraw(500);

account.displayBalance();