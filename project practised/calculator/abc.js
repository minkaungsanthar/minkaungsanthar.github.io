function sum() {

    // Input 
    let firstNumber = parseInt(document.getElementById('fNumber').value) ;
    let secondNumber = parseInt(document.getElementById('sNumber').value) ;

    // Process 
    let sum = firstNumber + secondNumber ;

    // Output 
    let html = `Ans: Sum is ${sum}`;
    document.getElementById('result').innerHTML = html ;
}

function sub() {

    let firstNumber = parseInt(document.getElementById('fNumber').value) ;
    let secondNumber = parseInt(document.getElementById('sNumber').value) ;

    let sub = firstNumber - secondNumber ;

    let html = `Ans: Subtracton is ${sub}`;
    document.getElementById('result').innerHTML = html ;
}

function mul() {

    let firstNumber = parseInt(document.getElementById('fNumber').value) ;
    let secondNumber = parseInt(document.getElementById('sNumber').value) ;

    let mul = firstNumber * secondNumber ;

    let html = `Ans: Multiplication is ${mul}`;
    document.getElementById('result').innerHTML = html ;
}

function div() {

    let firstNumber = parseInt(document.getElementById('fNumber').value) ;
    let secondNumber = parseInt(document.getElementById('sNumber').value) ;

    let div = firstNumber / secondNumber ;

    let html = `Ans: Division is ${div}`;
    document.getElementById('result').innerHTML = html ;
}

function mod() {

    let firstNumber = parseInt(document.getElementById('fNumber').value) ;
    let secondNumber = parseInt(document.getElementById('sNumber').value) ;

    let mod = firstNumber % secondNumber ;

    let html = `Ans: Modulus is ${mod}`;
    document.getElementById('result').innerHTML = html ;
}