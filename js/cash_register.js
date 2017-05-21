function cashModule() {
  var amount = 0;
  var balance = 0;
  var calculator = calcModule();

  function getBalance() {
    return balance;
  }

  function depositCash(cash) {
    balance += cash;
  }

  function withdrawalCash(cash) {
    balance -= cash;
  }

  return {
    getBalance : getBalance,
    depositCash : depositCash,
    withdrawalCash : withdrawalCash
  };
}

