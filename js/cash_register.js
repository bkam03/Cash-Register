function cashModule() {
  var amount = [];
  var balance = 0;
  var calculator = calcModule();

  function removeBrackets( remove ) {
    // return remove.charAt(2);
    return remove.slice( 2, remove.length-2 );
  } // removes brackets from array to display just number


  function input(){
    var keyPress = removeBrackets( this.innerHTML );

    //validation for operator repeats/chains
    var operatorArray = [ "+", "-", "/", "*" ];
//check if there are 2 operators in a row, allow replacement
  //if keyPress is an operator,
  if( operatorArray.indexOf( keyPress ) > -1 ) {
    //check if last input was operator. if so delete previous operator.
    if( operatorArray.indexOf( amount[ amount.length - 1 ] ) > -1 ) {
      amount.pop();
      display( amount );
    }
  }
    amount.push( keyPress );
    display( amount );
  } // display number (without brackets) that users click

  function display( inputDisplay ){
    var node = document.querySelector( "#display" );
    if ( Array.isArray( inputDisplay ) ){
    node.innerHTML = inputDisplay.join( '' );
      } else {
        node.innerHTML = inputDisplay;
      }
  } // display input users click

  function resetAmount() {
    amount = [];
  }  //reset the amount

  //public functions

  function getBalance() {
    amount = [ balance ];
    display( amount );
  } // display balance

  function clear() {
    calculator.clear();
    resetAmount();
    display( calculator.getTotal() );
  }

  function depositCash() {
    var depositing = calculation();
    clear();
    if( depositing > 0 ) {
      balance += depositing;
    } else {
      display( "invalid action" );
    }
  }

  function withdrawalCash() {
    var withdrawing = calculation();
    if( withdrawing <= balance ) {
      balance -= withdrawing;
      display( balance );
    } else {
      resetAmount();
      display( "insufficient funds" );
    }
    //console.log(balance);
  }

  function extractNum(){
    var number = "";
    while( !isNaN( amount[ 0 ] ) || amount[ 0 ] === "." ){
      number = number + amount.shift();
    }
    return Number( number );

  }

  function calculation(){
    var total = 0;

    if ( !isNaN(amount[ 0 ] ) ) {
      calculator.clear();
      calculator.add( extractNum() );
    }

    //loop while amount array.length > 0
      while( amount.length > 0 ) {
        var operator = amount.shift();
        var currentNum = extractNum();
        if ( operator === "+" ) {
          calculator.add( currentNum );
        } else if ( operator === "-" ) {
          calculator.subtract( currentNum );
        } else if ( operator === "*" ){
          calculator.multiply( currentNum );
        } else if ( operator === "/" ){
          calculator.divide( currentNum );
        }
      }
      total = calculator.getTotal();
      display( total );
      return total;
  }

  return {
    getBalance : getBalance,
    depositCash : depositCash,
    withdrawalCash : withdrawalCash,
    display : display,
    input :input,
    calculation : calculation,
    clear : clear
  };
}

var cashRegister = cashModule(); // turn cashModule into an object

var buttons = document.querySelectorAll( ".number" ); // buttons call for class "number" in HTML
for ( var i = 0; i < buttons.length; i++ ) {
  buttons[ i ].addEventListener( 'click', cashRegister.input );
} // loops though class "number" (from HTML) and makes it run input function when clicked

buttons = document.querySelectorAll( ".operations" ); // reassign buttons to call class "operation"
for( var i = 0; i < buttons.length; i++ ) {
  buttons[ i ].addEventListener( 'click', cashRegister.input );
}// loops though class "operations" (from HTML) and makes it run input function when clicked

balance.addEventListener( "click", cashRegister.getBalance ); //run getBalance function when clicked
equal.addEventListener( "click",cashRegister.calculation );
clear.addEventListener( "click", cashRegister.clear );
deposit.addEventListener( "click", cashRegister.depositCash );
withdraw.addEventListener( "click", cashRegister.withdrawalCash );
