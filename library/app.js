let overlay = document.querySelector('.overlay');
let closebtn = document.querySelector('.close');
let addbtn = document.querySelector('.addbook');
let modal = document.querySelector('.modal-container');
let bookgrid = document.querySelector('.bookgrid');
let addbookform = document.querySelector('.addbookform');
let deletebtn = document.querySelector('.delete');



addbtn.addEventListener('click', function()
{
    overlay.classList.add('active');
    modal.classList.add('active');
});

closebtn.addEventListener('click', function()
{
    overlay.classList.remove('active');
    modal.classList.remove('active');
});


let myLibrary = [];

function saveLibraryToLocalStorage() 
{
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function loadLibraryFromLocalStorage() {
    const savedLibrary = localStorage.getItem('myLibrary');
    if (savedLibrary) {
        myLibrary = JSON.parse(savedLibrary);
    } else {
        myLibrary = [];
    }
}

loadLibraryFromLocalStorage();


let name = "";
let author = "";
let pages = 0;
let read = false;

function Book(name, author, pages, read)
{
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(nbook){

   
        myLibrary.push(nbook);
        saveLibraryToLocalStorage();
    
}


function displayBooks()
{
    let bookHTML = '';
    myLibrary.forEach(function(book, index)
    {
        if(book.read === true)
        {
            bookHTML = bookHTML + ` <div class="box">
            <div class="bookname">${book.name}</div>
            <div class="bookauthor">${book.author}</div>
            <div class="bookpages">${book.pages}</div>
            <button class="read" data-index = "${index}">Read</button>
            <button class="delete" data-index = "${index}">Delete</button>
             </div>`;
        }
        else if(book.read=== false)
        {
            bookHTML = bookHTML + ` <div class="box">
            <div class="bookname">${book.name}</div>
            <div class="bookauthor">${book.author}</div>
            <div class="bookpages">${book.pages}</div>
            <button class="notread" data-index = "${index}">Not Read</button>
            <button class="delete" data-index = "${index}">Delete</button>
             </div>`;
        }
       
    });

    bookgrid.innerHTML = bookHTML;

}



addbookform.addEventListener('submit', function()
{
    event.preventDefault();
    const name = document.querySelector('.inputTitle').value;
    const author = document.querySelector('.inputAuthor').value;
    const pages = document.querySelector('.inputPages').value;
    const isread = document.querySelector('.checks').checked;


    let book =  new Book(name, author, pages, isread);
    addBookToLibrary(book);

    overlay.classList.remove('active');
    modal.classList.remove('active');

    addbookform.reset();

    displayBooks();

   
} );

document.addEventListener('click', function(event)
{
    if(event.target.classList.contains('delete'))
    {
        let bookIndex = event.target.dataset.index;
        myLibrary.splice(bookIndex, 1);
        saveLibraryToLocalStorage();
        displayBooks();
        
    }
});

document.addEventListener('click', function(event)
{
    if(event.target.classList.contains('read'))
    {
        let bookIndex = event.target.dataset.index;
        myLibrary[bookIndex].read = false;
        saveLibraryToLocalStorage();
        event.target.classList.remove('read');
        event.target.classList.add('notread');
        event.target.innerHTML='Not Read';


    }
    else if(event.target.classList.contains('notread'))
    {
        let bookIndex = event.target.dataset.index;
        myLibrary[bookIndex].read = true;
        saveLibraryToLocalStorage();
        event.target.classList.remove('notread');
        event.target.classList.add('read');
        event.target.innerHTML='Read';
    }
});

window.onload = () => {
    loadLibraryFromLocalStorage();

    displayBooks();
   
};