const btn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelector(".input-box");

function showStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showStorage();
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

btn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.prevantDefault();
  }
});
