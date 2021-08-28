//Global Variables
let SubmitedBookTitle = document.getElementById("BookTitle").value;

let SubmittedBookAuthor = document.getElementById("BookAuthor").value;

let SubmmitedBookpages = document.getElementById("NumberOfPages").value;

let SubmmitedBookLanguage = document.getElementById("BookLanguage").value;

let SubmittedBookStats = document.getElementById("BookStats").value;

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
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
}); 


