const inptBox = document.getElementById("enterText");
const ulContainer = document.getElementById("ulText");

function addTask() {
  if (inptBox.value === "") {
    prompt("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inptBox.value;
    ulContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inptBox.value = "";
  saveData();
}

ulContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ulText.innerHTML);
}
function showTask() {
  ulText.innerHTML = localStorage.getItem("data");
}
showTask();
