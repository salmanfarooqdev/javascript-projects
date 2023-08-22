let container = document.querySelector('.container');
let color = document.querySelector('.color');
let reset = document.querySelector('.clear');
let range = document.getElementById("sizeSlider");
let isDrawing = false;
let rangePlace = document.querySelector('.size-value');
let colorMode = document.querySelector('.colorMode');
let rainbowMode = document.querySelector('.rainbowMode');
let eraser = document.querySelector('.eraser');
let clearMode = document.querySelector('.clear');

let eraserColor = 'white';

colorMode.addEventListener('click',activateBtn);
rainbowMode.addEventListener('click',activateBtn);
eraser.addEventListener('click',activateBtn);

eraser.addEventListener('click', activateEraser);
colorMode.addEventListener('click',activateColorMode);
rainbowMode.addEventListener('click',activateRainbowMode);



let erasermode = false;
let colormode = false;
let rainbowmode = false;
function activateEraser()
{
    erasermode = true;
    colormode = false;
    rainbowmode = false;
}
function activateColorMode()
{
    colormode = true;
    erasermode= false;
    rainbowmode =false;
}
function activateRainbowMode()
{
    rainbowmode = true;
    colormode = false;
    erasermode= false;
}

function activateBtn(e)
{
    if(e.target.classList[1]=== 'colorMode')
    {
        colorMode.classList.add('active');
        rainbowMode.classList.remove('active');
        eraser.classList.remove('active');

    }
    else if(e.target.classList[1]=== 'rainbowMode')
    {
        rainbowMode.classList.add('active'); 
        colorMode.classList.remove('active');
        eraser.classList.remove('active');
    }
    else if(e.target.classList[1]=== 'eraser')
    {
        eraser.classList.add('active');
        rainbowMode.classList.remove('active');
        colorMode.classList.remove('active');
        erasermode = true;
    }
}

range.addEventListener('change', function()
{
    const val = range.value;
    updateRange(val);
    clear();
    setGrid(val);
});

range.addEventListener('mousemove', function()
{
    let val = range.value;
    updateRange(val);
});


function updateRange(val)
{
    rangePlace.innerHTML = `${val} x ${val}`;
}


function setGrid(range)
{
    for(let i = 0; i< range * range ; i++)
    {
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.style.cssText += `width:calc(100%/${range}); height: calc(100%/${range});`
        cell.addEventListener('mousedown',function()
        {
            isDrawing= true;
            changeColor(cell);
            
        });
        cell.addEventListener('mouseup', function()
        {
            isDrawing = false;
        });

        cell.addEventListener('mouseover', function()
        {
            if(isDrawing)
            {
                changeColor(cell);
            }
        });
        container.appendChild(cell);
    }
}


function updateColor()
{
    let col = color.value;
    return col;
}
function changeColor(cell)
{
    if(erasermode === true)
    {
        cell.style.backgroundColor = 'white';
    }
    else if(colormode === true)
    {
        let colour = updateColor();
        cell.style.backgroundColor = colour;
    }
    else if(rainbowmode === true)
    {
        const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        //#f12634
         let c= '#';
        for(let i =0;i< 6;i++)
        {
            let index = Math.floor(Math.random()* colors.length);
            c = c + colors[index];
        }
        cell.style.backgroundColor = c;
     }
        
    

    
   
}

reset.addEventListener('click', clearGrid);

function clearGrid()
{
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell)
    {
        cell.style.backgroundColor = "white";
    });
}

function clear()
{
    container.innerHTML="";
}

window.onload = () => {
   setGrid(16);
   activateColorMode();
   colorMode.dispatchEvent(new Event('click'));
  }