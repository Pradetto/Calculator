function operate(operator,a,b){
    if (operator === 'add'){
        return add(a,b);
    } else if (operator === 'subtract'){
        return subtract(a,b);
    }else if (operator === 'multiply'){
        return multiply(a,b);
    }else if (operator === 'divide'){
        return divide(a,b);
    };
};

// Calculator functions

function add(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};



// Hover darken

const bottomButtons = document.querySelector('#bottomButtons');
const childrenBottomButtons = bottomButtons.childNodes;

childrenBottomButtons.forEach(button => {
    button.addEventListener('mouseover', function(e){
    e.target.style.background = 'lightgray';
    });
});

childrenBottomButtons.forEach(button => {
    button.addEventListener('mouseleave', function(e){
    e.target.style.background = 'white';
    });
});

const middleButtons = document.querySelector('#middleButtons');
const childrenMiddleButtons = middleButtons.childNodes;

childrenMiddleButtons.forEach(button =>{
    button.addEventListener('mouseover', function(e){
        e.target.style.filter = 'grayscale(75%)'
    });
});

childrenMiddleButtons.forEach(button =>{
    button.addEventListener('mouseleave', function(e){
        e.target.style.filter = 'grayscale(0)'
    });
});


// Adding the information to the screen
const topScreen = document.querySelector('#topHalf')
const lowerScreen = document.querySelector('#lowerHalf')

// digits
const digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
    lowerScreen.textContent += button.textContent;
    });
});

// decimal

// operation

// equals


// Clear & Delete Buttons

const clear = document.querySelector('#clear');

clear.addEventListener('click',() => lowerScreen.textContent = '');

const del = document.querySelector('#delete');
del.addEventListener('click', () => {
    lowerScreen.textContent = '';
    topScreen.textContent = '';
});
