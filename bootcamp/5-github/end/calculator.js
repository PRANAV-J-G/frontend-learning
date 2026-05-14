let runningTotal = 0 ;
let buffer = "0" ; 

// the last operator that was pressed 
let previousOperator; 

const calcscreen = document.querySelector('.screen');

function buttonClick(value) {
    // the value comes out as a string and the isNan checks that too
    if (isNaN(value)){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    calcscreen.innerText = buffer; 
    }


function handleSymbol(symbol){
    console.log('handleSymbol was called with symbol: ' + symbol);
    switch(symbol){
        case 'C':
            buffer = "0"; 
            runningTotal = 0;
            break; 
        case '-':
        case '+':
        case '*':
        case '/':
            handleMath(symbol);
            calcscreen.innerText = buffer;
            break;
        case '=':
            calcscreen.innerText = runningTotal;
            break;
        }
    }

function handleMath(symbol) { 
    console.log('handleMath was called with symbol: ' + symbol);
    if (buffer === '0'){
        // does nothing 
        return; 
    }
    // +buffer does the same as parseInt(buffer)
    const intBuffer = +buffer; 
    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    } 
    previousOperator = symbol; 
    buffer = "0";

}

function flushOperation(intBuffer){
    console.log('runningTotal: ' + runningTotal);
    if (previousOperator === '+'){
        runningTotal += intBuffer
    } else if (previousOperator === '-'){
        runningTotal -= intBuffer;
    } else if (previousOperator === '/'){
        runningTotal /= intBuffer;
    } else {
        runningTotal *= intBuffer;
    }
    console.log(runningTotal);
}

function handleNumber(numberString){
    // because the number comes in a string format whenever it comes from the browser
    if (buffer === "0"){
        buffer = numberString;
    } else {
        buffer = buffer + numberString; 
    }
}

function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    })
    
}

init();


