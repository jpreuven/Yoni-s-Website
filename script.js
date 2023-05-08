const h2 = document.createElement("h2");
const ul = document.createElement("ul");
let listOpen = true;

h2.textContent = "This content brought to you by JavaScript";
document.querySelector("body").appendChild(h2);

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#btn-more")
    .addEventListener("click", function (event) {
      if (listOpen === true) {
        ul.textContent = "Hello, my name is Yoni";
        document.querySelector("p").appendChild(ul);
        listOpen = false;
      } else if (listOpen === false) {
        document.querySelector("p").removeChild(ul);
        listOpen = true;
      }
    });
});
