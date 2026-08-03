//Public, Private and Protected

class BankAccount {
    public holder: string;
    private balance: number;
    protected bank: string;

    constructor(holder: string, balance: number) {
        this.holder = holder;
        this.balance = balance;
        this.bank = "SBI";
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

const acc = new BankAccount("Priya", 10000);

console.log(acc.holder);
acc.showBalance();