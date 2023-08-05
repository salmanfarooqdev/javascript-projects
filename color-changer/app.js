let colorName = document.getElementById('colorName');
let btn = document.querySelector('.btn');

const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//#f12634
function generateColor()
{
    let c= '#';
    for(let i =0; i< 6;i++)
    {
        let index = Math.floor(Math.random()* colors.length);
        c = c + colors[index];
    }
    colorName.innerHTML= `Color is: ${c}`;
    return c;
}

btn.addEventListener('click', function()
{
    document.body.style.backgroundColor= generateColor();
})