// const list = [...document.querySelectorAll(".list")];
// const educationSection = [...document.querySelectorAll(".education")];
// const h3 = document.querySelector("h3");

const gridContainer = document.querySelector("#grid-container");
const gridChild = [...document.querySelectorAll(".grid-child")];
const btnMore = document.querySelector("#btn-more");
let listOpen = true;

// function closeList() {
//   gridChild.forEach((list) => list.remove(list));
// }

// function listAppend() {
//   gridChild.forEach((list) => gridContainer.append(list));
// }

function listFunc(action) {
  if (action === "close") {
    gridChild.forEach((list) => list.remove(list));
  } else if (action === "open") {
    gridChild.forEach((list) => gridContainer.append(list));
  }
}

function buttonInfo() {
  document.addEventListener("DOMContentLoaded", function () {
    btnMore.addEventListener("click", function (event) {
      event.preventDefault();
      if (listOpen === false) {
        listFunc("close");
        // closeList();
        console.log("hello");
        listOpen = true;
      } else if (listOpen === true) {
        listFunc("open");
        // listAppend();
        listOpen = false;
      }
    });
  });
}

buttonInfo();
listFunc("close");
