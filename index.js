//Global Variables

let myLibrary = [];

class Book {
  // the constructor...
  constructor(title, author, pages, language, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.language = language;
    this.isRead = isRead;
  }
}

function addBookToLibrary() {
  // do stuff here
  const title = document.querySelector('#BookTitle').value;
  const author = document.querySelector('#BookAuthor').value;
  const pages = document.querySelector('#NumberOfPages').value;
  const language = document.querySelector('#BookLanguage').value;
  const isRead = document.querySelector('#BookStats').value;

  const book = Book(title, author, pages, language, isRead);
  //add book to Ui

  //store book
}

//Store the books on local storage
class Store {
  static getBooks(){
    if(localStorage.getItem('myLibrary') !== null){
      myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    }

    return myLibrary;
  }

  static addBook(book){
    const books = Store.getBooks();

    books.push(book);
    
    localStorage.setItem('myLibrary',JSON.stringify(books));
  }

}


//Classes
const toggleForm = {
  formtoggle: function () {
    if (PopUpform.style.visibility === "hidden") {
      PopUpform.style.visibility = "visible";
    } else {
      PopUpform.style.visibility = "hidden";
    }
  }
};


class UI{
  static displayBooks(){
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));

  }

  static addBookToList(book){
    const list =document.querySelector('.main');

    const IndivDiv = document.createElement('div');

    IndivDiv.innerHTML = `
    <div class = 'displaybooktitle'>Book Title: ${book.title} <div>
    <div class="displayBookAuthor">Book Author: ${book.author}</div>
    <div class="DisplayNumberofPages">No. of Pages:${book.pages}</div>
    <div class="DisplayBookLanguage">Language: ${book.language}</div>
    <div class="DisplayBookStatus">Book Status: ${book.isRead}</div>
    <div><href="x" class= "btn delete">X</a><div>
    `;

    list.appendChild(IndivDiv)
  }
  static deleteBook(el){
    if(el.classlist.contains('delete')){
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields(){
    document.getElementById("BookTitle").value = "";
    document.getElementById("BookAuthor").value = "";
    document.getElementById("NumberOfPages").value = "";
    document.getElementById("BookLanguage").value = "";
    document.getElementById("BookStats").value = null;
  }
}

//Dom Maniuplation
window.addEventListener('load', UI.displayBooks);

//manipulate the add button below//

const AddButtons = document.getElementById("addNewBook");
const PopUpform = document.querySelector(".addBookForm");

window.onload = toggleForm.formtoggle;

AddButtons.onclick = toggleForm.formtoggle;


//manipulate the x button//

const closebuttonicon = document.querySelector(".closeIcon");

closebuttonicon.onclick = toggleForm.formtoggle;


//Manipulate the Submit button

const SubmitBookicon = document.querySelector(".addBook");

SubmitBookicon.onclick = function () {
  console.log(document.getElementById("BookStats"));
  const title = document.querySelector('#BookTitle').value;
  const author = document.querySelector('#BookAuthor').value;
  const Pages = document.querySelector('#NumberOfPages').value;
  const BookLanguage = document.querySelector('#BookLanguage').value;
  const isRead  = document.querySelector('#BookStats').value;

  const book = new Book(title, author, Pages, BookLanguage, isRead);

  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();


};


//Manipulate Clear button

const ClearButtonIcon = document.querySelector(".clear");

ClearButtonIcon.addEventListener("click", () => {;
  UI.clearFields();
  }
); 


