import { createHomePageContent } from "./home";
import { createMenuPageContent } from "./menu";
import { createContactPageContent } from "./contact";
import { generateHeader } from "./header";
import { generatefooter } from "./footer";


generateHeader();

const contentdiv = document.querySelector('.content');
const maindiv = document.createElement('div');
maindiv.classList.add('main');
contentdiv.appendChild(maindiv);

function clearMain()
{
    maindiv.innerHTML='';
}

createHomePageContent();

document.querySelector('.home').addEventListener('click', ()=>{
    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        createHomePageContent();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);
   
});

document.querySelector('.contact').addEventListener('click', ()=>{

    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        createContactPageContent();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);

    
});


document.querySelector('.menu').addEventListener('click', ()=>{
    maindiv.classList.add('fade-out');

    setTimeout(()=>{
        clearMain();
        createMenuPageContent();
        maindiv.classList.remove('fade-out');
        maindiv.classList.add('fade-in');

    },300);

    
});

generatefooter();