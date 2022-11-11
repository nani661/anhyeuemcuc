var text = document.querySelector(".total");
var button = document.querySelector("button");

var strings = "";

button.onclick = function () {
  setInterval(() => {
    button.classList.add("clear");
    var hola = " ❤️";
    strings += hola;
    text.innerHTML = `<p> ${strings}</p>`;
  }, 1);
};
