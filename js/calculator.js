

function calcModule() {
  var total = 0;

  function add( numInput ) {
    return total += numInput;
  }

  function subtract( numInput ) {
    return total -= numInput;
  }

  function multiply( numInput ) {
    return total *= numInput;
  }

  function divide( numInput ) {
    return total /= numInput;
  }
  function clear() {
    total = 0;
    return total;
  }

  function getTotal(){
    return total;
  }

  return {
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide,
    clear : clear,
    getTotal : getTotal
  };
}

