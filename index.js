let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}


//Dom Maniuplation
const AddButtons = document.getElementById("addNewBook");
const PopUpform = document.querySelector('.addBookForm');


    window.onload = function(){
        PopUpform.style.visibility = "hidden"
    };


AddButtons.onclick = function(){
    if (PopUpform.style.visibility === "hidden") {
        PopUpform.style.visibility = "visible";
      } else {
        PopUpform.style.visibility = "hidden";
      }
};