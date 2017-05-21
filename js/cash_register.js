function cashModule() {
  var amount = [0];
  var balance = 0;
  var calculator = calcModule();

  function inputNumber(){
    amount.push(this.innerHTML);
    display(amount);
  }

  function display (inputDisplay){
    var node = document.querySelector("#display");
    node.innerHTML = inputDisplay;
  }

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
    withdrawalCash : withdrawalCash,
    display : display,
    inputNumber :inputNumber
  };
}

var cashRegister = new cashModule();
var buttons = document.querySelectorAll(".number");

for (var i = 0; i < buttons.length; i++ ){
  buttons[i].addEventListener('click', cashRegister.inputNumber());
  console.log(buttons[i].innerHTML);
}

