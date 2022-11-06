//Closure

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

//newAccount('Susan', 500)();

const ajaas = newAccount('Ajaas', 300);
const afaan = newAccount('Afaan', 1000);

ajaas.showBalance();
afaan.showBalance();
ajaas.deposit(400);
afaan.deposit(2000);
ajaas.withdraw(3000);
