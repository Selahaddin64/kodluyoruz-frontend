
let input = document.querySelector("#task");
let ul = document.querySelector("#list");
let li = document.querySelector("#list li");
let span = document.getElementsByClassName("close");

function newElement() {

  if (input.value === "" || input.value.includes("  ") === true || input.value[0] === " ") {

    $(document).ready(function () {
      $("#error").toast('show');
    });
  }

  else {

    let liAdd = document.createElement('li');
    liAdd.innerHTML = input.value;
    ul.prepend(liAdd);

    let span = document.createElement("span");
    liAdd.appendChild(span);
    span.className = "close"
    span.innerHTML = "x";

    $(document).ready(function () {
      $("#success").toast('show');
    });

    document.querySelector("#list li .close").addEventListener("click", function () {
      this.parentNode.remove();
    });

    document.querySelector("#list li").addEventListener("click", function () {
      if (this.classList.contains("checked") === true) {
        this.classList.remove("checked");
      }
      else {
        this.classList.add("checked");
      }
    });

    input.value = "";
  }
}


document.querySelector("#list li").addEventListener("click", function () {
  if (this.classList.contains("checked") === true) {
    this.classList.remove("checked");
  }
  else {
    this.classList.add("checked");
  }
});












