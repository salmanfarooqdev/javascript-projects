//home page content

export function createHomePageContent(){
    const main = document.querySelector('.main');

    let homediv = document.createElement('div');
    homediv.classList.add('homediv');

    let para = document.createElement('p');
    para.textContent = "Welcome To our Home Page";

    let para2 = document.createElement('p');
    para2.textContent = "Order Online Now";

    const image = document.createElement('img');
    image.src = 'chef.png';

    homediv.appendChild(para);
    homediv.appendChild(image);
    homediv.appendChild(para2);


    main.appendChild(homediv);

}