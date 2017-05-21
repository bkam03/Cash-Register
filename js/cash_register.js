function cashModule() {
  var amount = [];
  var balance = 220;
  var calculator = calcModule();

  function removeBrackets(remove) {
    // return remove.charAt(2);
    return remove.slice(2, remove.length-2);
  } // removes brackets from array to display just number


  function input(){
    amount.push(removeBrackets(this.innerHTML));
    display(amount);
  } // display number (without brackets) that users click

  function display (inputDisplay){
    var node = document.querySelector("#display");
    if (Array.isArray(inputDisplay)){
    node.innerHTML = inputDisplay.join('');
      }else{
        node.innerHTML = inputDisplay;
      }
  } // display input users click

  function getBalance() {
    console.log("getBalance");
    amount = [balance];
    display(amount);
    /*display();
    return balance;*/ //back up code
  } // display balance

  function depositCash(cash) {
    balance += cash;
  }

  function withdrawalCash(cash) {
    balance -= cash;
  }

  function extractNum(){
    var number = "";
    while(!isNaN(amount[0])){
      number = number + amount.shift();
    }
    return Number(number);

  }

  function calculation(){
    if (!isNaN(amount[0])){
      calculator.clear();
      calculator.add(extractNum());
    }

    //loop while amount array.length > 0
      while(amount.length > 0){
        var operator = amount.shift();
        var currentNum = extractNum();
        if (operator === "+"){
          calculator.add(currentNum);
        }else if (operator === "-"){
          calculator.subtract(currentNum);    
        }else if (operator === "*"){
          calculator.multiply(currentNum);     
        }else if (operator === "/"){
          calculator.divide(currentNum);   
        }
      }

      display(calculator.getTotal());

      //identify the operator 

      // extractNum 

      // perform operation

    //display total
  }

  return {
    getBalance : getBalance,
    depositCash : depositCash,
    withdrawalCash : withdrawalCash,
    display : display,
    input :input,
    calculation : calculation
  };
}

var cashRegister = new cashModule(); // turn cashModule into an object
var buttons = document.querySelectorAll(".number"); // buttons call for class "number" in HTML

for (var i = 0; i < buttons.length; i++ ){
  buttons[i].addEventListener('click', cashRegister.input);
  console.log(buttons[i].innerHTML);
} // loops though class "number" (from HTML) and makes it run input function when clicked

buttons = document.querySelectorAll(".operations"); // reassign buttons to call class "operation"

for( var i = 0; i < buttons.length;i++) {
  buttons[i].addEventListener('click', cashRegister.input);
}// loops though class "operations" (from HTML) and makes it run input function when clicked

balance.addEventListener("click", cashRegister.getBalance); //run getBalance function when clicked

var calculate = document.querySelector("#equal");
calculate.addEventListener("click",cashRegister.calculation);
