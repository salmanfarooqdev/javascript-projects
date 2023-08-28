
class Library{
    constructor()
    {
        this.myLibrary = [];
        this.overlay = document.querySelector('.overlay');
        this.closebtn = document.querySelector('.close');
        this.addbtn = document.querySelector('.addbook');
        this.modal = document.querySelector('.modal-container');
        this.bookgrid = document.querySelector('.bookgrid');
        this.addbookform = document.querySelector('.addbookform');
        this.deletebtn = document.querySelector('.delete');

        this.loadLibraryFromLocalStorage();
        this.setupEventListeners();
        this.displayBooks();
    }

    setupEventListeners() 
    {
        this.addbtn.addEventListener('click', () =>
        {
            this.overlay.classList.add('active');
            this.modal.classList.add('active');
        });
        
        this.closebtn.addEventListener('click', () =>
        {
            this.overlay.classList.remove('active');
            this.modal.classList.remove('active');
        });

        this.addbookform.addEventListener('submit', () =>
        {
            event.preventDefault();
            const name = document.querySelector('.inputTitle').value;
            const author = document.querySelector('.inputAuthor').value;
            const pages = document.querySelector('.inputPages').value;
            const isread = document.querySelector('.checks').checked;


            let book =  new Book(name, author, pages, isread);
            this.addBookToLibrary(book);

            this.overlay.classList.remove('active');
            this.modal.classList.remove('active');

            this.addbookform.reset();

            this.displayBooks();
        } );

        document.addEventListener('click', (event) =>
        {
            if(event.target.classList.contains('delete'))
            {
                let bookIndex = event.target.dataset.index;
                this.myLibrary.splice(bookIndex, 1);
                this.saveLibraryToLocalStorage();
                this.displayBooks();
                
            }
        });

        document.addEventListener('click', (event) =>
        {
            if(event.target.classList.contains('read'))
            {
                let bookIndex = event.target.dataset.index;
               this.myLibrary[bookIndex].read = false;
                this.saveLibraryToLocalStorage();
                event.target.classList.remove('read');
                event.target.classList.add('notread');
                event.target.innerHTML='Not Read';


            }
            else if(event.target.classList.contains('notread'))
            {
                let bookIndex = event.target.dataset.index;
                this.myLibrary[bookIndex].read = true;
                this.saveLibraryToLocalStorage();
                event.target.classList.remove('notread');
                event.target.classList.add('read');
                event.target.innerHTML='Read';
            }
        });
    }

    saveLibraryToLocalStorage() 
    {
        localStorage.setItem('myLibrary', JSON.stringify(this.myLibrary));
    }

    loadLibraryFromLocalStorage() {
        const savedLibrary = localStorage.getItem('myLibrary');
        if (savedLibrary) {
            this.myLibrary = JSON.parse(savedLibrary);
        } else {
            this.myLibrary = [];
        }
    }

    addBookToLibrary(nbook){
        this.myLibrary.push(nbook);
        this.saveLibraryToLocalStorage();
    }

    displayBooks()
    {
        let bookHTML = '';
        this.myLibrary.forEach(function(book, index)
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

        this.bookgrid.innerHTML = bookHTML;

    }


}


function Book(name, author, pages, read)
{
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

window.onload = () => {
    const library = new Library();
   
};