//Global Variables

let myLibrary = [];

function Book() {
  // the constructor...
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary() {
  // do stuff here
  const title = document.querySelector('#BookTitle').value;
  const author = document.querySelector('#BookAuthor').value;
  const pages = document.querySelector('#NumberOfPages').value;
  const isRead = document.querySelector('#BookLanguage').value;

  if(title == '' || author == '' || pages == '' || isRead == ''){

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

//Dom Maniuplation

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
};


//Manipulate Clear button

const ClearButtonIcon = document.querySelector(".clear");

function restartInputValues() {
  document.getElementById("BookTitle").value = "";
  document.getElementById("BookAuthor").value = "";
  document.getElementById("NumberOfPages").value = "";
  document.getElementById("BookLanguage").value = "";
  document.getElementById("BookStats").value = null;
}

ClearButtonIcon.addEventListener("click", () => {;
  restartInputValues();
  }
); 


