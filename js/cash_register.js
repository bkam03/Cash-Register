function cashModule() {
  var amount = [];
  var balance = 220;
  var calculator = calcModule();

  function removeBrackets(remove) {
    return remove.charAt(2);
  }



  function input(){
    amount.push(removeBrackets(this.innerHTML));
    display(amount);
  }

  function display (inputDisplay){
    var node = document.querySelector("#display");
    node.innerHTML = inputDisplay.join('');
  }

  function getBalance() {
    console.log("getBalance");
    amount = [balance];
    display(amount);
    /*display();
    return balance;*/
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
    input :input
  };
}

var cashRegister = new cashModule();
var buttons = document.querySelectorAll(".number");

for (var i = 0; i < buttons.length; i++ ){
  buttons[i].addEventListener('click', cashRegister.input);
  console.log(buttons[i].innerHTML);
}

buttons = document.querySelectorAll(".operations");

for( var i = 0; i < buttons.length;i++) {
  buttons[i].addEventListener('click', cashRegister.input);
}

balance.addEventListener("click", cashRegister.getBalance);
