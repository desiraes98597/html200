
function squaringNumber(firstNumber){

    let newNumber = prompt("Please enter a number");

    function squareANumber(numberBeingSquared) {
     let numberSquared = numberBeingSquared * numberBeingSquared;
     alert(numberSquared);
   }
   
   squareANumber(Number(newNumber));

}

