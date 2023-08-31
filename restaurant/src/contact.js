export function createContactPageContent(){

    let main = document.querySelector('.main');
    let contact = document.createElement('div');
    contact.classList.add('contactdiv');

    let pp = document.createElement('p');
    pp.textContent = "123 456 789";

    let address = document.createElement('p');
    address.textContent = "Ali View Park, House No 879, Lahore, Pakistan";

    let img = document.createElement('img');
    img.src = 'location.png';

    contact.appendChild(pp);
    contact.appendChild(address);
    contact.appendChild(img);

    main.appendChild(contact);
}