let input = document.querySelector('.calculator__input');
let inputArr = [];

let buttonNum = document.querySelectorAll('.button__darkgray');
let buttonSym = document.querySelectorAll('.button__orange')
let buttonClear = document.querySelector('.button__clear');
let buttonOneClear = document.querySelector('.button__one-clear')
let buttonResult = document.querySelector('.button__result')

let firstNumber = 0;
let firstNumberArr = [];

let secondNumber = 0;
let secondNumberArr = [];

let symbol = '';
let symbolArr = [];

let plus = 0;
let minus = 0;
let mult = 0;
let slash = 0;

buttonNum.forEach((elem) => {
    elem.addEventListener('click', () => {
        inputArr.push(elem.innerHTML)
        input.innerHTML = inputArr.join('');

        if (inputArr[0] == 0) {
            inputArr.splice(0, inputArr.length)
        }

        if (inputArr[0] == buttonNum[10].innerHTML) {
            inputArr.splice(0, inputArr.length)
            inputArr.push(0)
            input.innerHTML = inputArr.join('')
            inputArr.pop()
        }
    })
})


buttonSym.forEach((elem) => {
    elem.addEventListener('click', () => {
        if (inputArr[0] == this.elem) {
            inputArr.splice(0, inputArr.length)
        }else {
            inputArr.push(elem.innerHTML)
            input.innerHTML = inputArr.join('')


            //create first number

            //delete elem in first number array
            firstNumberArr.splice(0, firstNumberArr.length)
            
            inputArr.forEach((elem) => {
                firstNumberArr.push(elem)
            })
            firstNumberArr.pop()
            firstNumber = +firstNumberArr.join('')

            //create symbol
            inputArr.forEach((elem) => {
                symbolArr.push(elem)
            })
            symbol = symbolArr[symbolArr.length - 1]
        }

    })
})


buttonResult.addEventListener('click', () => {
    //create second number

    //delete elem in second number array
    secondNumberArr.splice(0, secondNumberArr.length)

    inputArr.forEach((elem) => {
        secondNumberArr.push(elem)
    })
    secondNumberArr.splice(0, firstNumberArr.length + 1)
    secondNumber = +secondNumberArr.join('')

    plus = firstNumber + secondNumber;
    minus = firstNumber - secondNumber;
    mult = firstNumber * secondNumber;
    slash = firstNumber / secondNumber;

    inputArr.splice(0, firstNumberArr.length + 1 + secondNumberArr.length)
    
    switch(symbol) {
        case '+':
            inputArr.push(plus)
            break;
        case '-':
            inputArr.push(minus)
            break;
        case '*':
            inputArr.push(mult)
            break;
        case '/':
            inputArr.push(slash)
            break;
    }

    input.innerHTML = inputArr.join('')

    if (input.innerHTML == 0) {
        inputArr.pop()
    }
})


buttonClear.addEventListener('click', () => {
    inputArr.splice(0, inputArr.length)
    inputArr.push(0);
    input.innerHTML = inputArr.join('')
    inputArr.pop()

    firstNumber = 0;
    secondNumber = 0;
})


buttonOneClear.addEventListener('click', () => {
    inputArr.pop()
    input.innerHTML = inputArr.join('')

    if (inputArr.length == 0) {
        inputArr.push(0)
        input.innerHTML = inputArr.join('')
        inputArr.pop()
    }
})
