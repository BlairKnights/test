class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
        } else {
            console.log(`Insufficient balance in account ${this.accountNumber}.`);
        }
    }
  
    displayBalance() {
        console.log(`\nAccount ${this.accountNumber} balance: $${this.balance}`);
    }
}
  
const account1 = new BankAccount('SB-001', 2000);
  
account1.displayBalance(); 
  
account1.deposit(500); 
account1.displayBalance();
  
account1.withdraw(200); 
account1.displayBalance();
console.log("\n");