let input = document.querySelector('.calculator__input');
let inputArr = [];

let buttonNum = document.querySelectorAll('.button__darkgray');
let buttonSym = document.querySelectorAll('.button__orange')
let buttonClear = document.querySelector('.button__clear');
let buttonResult = document.querySelector('.button__result')


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
        }

    })
})


buttonResult.addEventListener('click', () => {
    
})


buttonClear.addEventListener('click', () => {
    inputArr.splice(0, inputArr.length)
    inputArr.push(0);
    input.innerHTML = inputArr.join('')
    inputArr.pop()
})


