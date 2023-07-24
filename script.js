const button = document.getElementById("btn");
const colorCode = document.querySelector(".color-code");
const body = document.body;

const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];

const colorSwitcher = () => {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexArray.length);
    hex += hexArray[randomIndex];

    colorCode.textContent = hex;
    body.style.backgroundColor = hex;
  }
};

button.addEventListener("click", colorSwitcher);
