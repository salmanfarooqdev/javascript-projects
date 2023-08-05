let counter = document.getElementById('count');
let buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach(function(button)
{
    button.addEventListener("click", function(e)
    {
        let dom = e.currentTarget.classList;

        if(dom.contains('decrease'))
        {
            count--;
            counter.textContent = count;
        }
        else if(dom.contains('reset'))
        {
            count=0;
            counter.textContent = count;
        }
        else {
            count++;
            counter.textContent = count;
        }
        if(count<0)
        {
            counter.style.color = "red";
        }
        else if(count==0)
        {
            counter.style.color = "black";
        }
        else if(count>0)
        {
            counter.style.color = "green";
        }
    })    

})