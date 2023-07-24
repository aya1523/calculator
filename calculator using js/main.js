let input =  document.querySelector("#input");

let firstNumber;
let secondNumber;
let arrayNumberOne = [];
let arrayNumberTwo = [];
let step = 0;
let result = 0;
let operation;

function getNumber(num){
   if(step === 0 || step === 1){
    arrayNumberOne.push(num);
    step = 1;
    firstNumber = Number(arrayNumberOne.join(''));
    input.value = firstNumber;
   }
   else if(step === 2){
    arrayNumberTwo.push(num);
    secondNumber = Number(arrayNumberTwo.join(''));
    input.value = secondNumber;
   }
}

function getOperator(op){
    step = 2;
    operation = op;
}


const calculate = () => {
  switch(operation){
    case '+': 
          result =  firstNumber + secondNumber;
          input.value = result; 
          break;
    case '-': 
          result =  firstNumber - secondNumber;
          input.value = result; 
          break;
    case '*': 
          result =  firstNumber * secondNumber;
          input.value = result; 
          break; 
    case '+': 
          result =  firstNumber / secondNumber;
          input.value = result; 
          break;
    default:
        result = 0;         
}
}
function clear(){
    input.value= '';
    step = 0;
    firstNumber = null;
    secondNumber = null;
    operation = null;
    arrayNumberOne = [];
    arrayNumberTwo = [];
}



