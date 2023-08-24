let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.clear');
let deleteValue = document.querySelector('.del');
let operatorButtons = document.querySelectorAll('.opbtn');
let equal = document.querySelector('.equalbtn');
let firstNum;
let operator;
let secondNum;

equal.addEventListener('click', function()
{
    if(calculation.firstnum != '' && calculation.op != '' && calculation.secondnum != '')
    {
        operate(calculation.firstnum, calculation.op, calculation.secondnum);
    }
});

function operate(fnum, op, snum)
{
    let first = parseFloat(fnum);
    let second = parseFloat(snum);

    switch (op) {
        case '+':
          updateDisplay(first + second);
          break;
        case '-':
          updateDisplay(first - second);
          break;
        case 'x':
          updateDisplay(first * second);
          break;
        case '/':
          updateDisplay(first / second);
          break;
        
      }
      calculation.firstnum='';
      calculation.secondnum='';
      calculation.op='';
}
function updateDisplay(val)
{
    display.value = val;
    calculation.firstnum = val.toString();
    calculation.secondnum='';
    calculation.op='';
}

let calculation = {

    firstnum: '',
    op:'',
    secondnum: ''
};

operatorButtons.forEach(function(opbutton)
{
    opbutton.addEventListener('click', function()
    {   
        if(calculation.firstnum != '' && calculation.op != '' && calculation.secondnum != ''){
            operate(calculation.firstnum, calculation.op, calculation.secondnum);
        }
        else if(calculation.firstnum != '' && calculation.op != '' && calculation.secondnum === ''){
        }
        else{
            calculation.firstnum = display.value;
            calculation.op = opbutton.innerHTML;
            display.value += opbutton.innerHTML;
        }
    });
});

deleteValue.addEventListener('click', function()
{
    if(calculation.secondnum != '' && calculation.firstnum!= '' && calculation.op != '')
    {
        display.value = display.value.slice(0,-1);
       calculation.secondnum = calculation.secondnum.toString().slice(0,-1);
    }
    else if(calculation.firstnum!= '' && calculation.op != '' && calculation.secondnum === '')
    {
        display.value = display.value.slice(0,-1);
        calculation.op = calculation.op.toString().slice(0,-1);
    }
    else if(calculation.firstnum!= '' && calculation.op === '' && calculation.secondnum === '')
    {
        display.value = display.value.slice(0,-1);
        calculation.firstnum = calculation.firstnum.toString().slice(0,-1);
    }
    else{
        display.value = display.value.slice(0,-1);
        calculation.firstnum = calculation.firstnum.toString().slice(0,-1);
    }

});

clear.addEventListener('click',function()
{
    display.value = 0;
    calculation.firstnum='';
    calculation.secondnum='';
    calculation.op='';
});

buttons.forEach(function(button)
{
    button.addEventListener('click', function()
    {
        let val = button.innerHTML;
        if(display.value === '0'){
            resetScreen();
        }
        if(calculation.op != '' && calculation.firstnum != ''){
            calculation.secondnum += val;
        }
    
        display.value += val;
    });
});

function resetScreen()
{
    display.value = '';
}
window.onload = () => {
    display.value =0;
   }