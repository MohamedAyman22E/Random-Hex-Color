let colors = document.querySelectorAll(".color_box ");
let button = document.querySelector("button");
let span = document.querySelector("span");
function generateColor() {
  colors.forEach(color => {
    let hexCode = "#" + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexCode;
    color.querySelector("h2").innerHTML = hexCode;
  });
}
button.addEventListener("click", () => {
  let hexCodeSpan = "#" + Math.random().toString(16).substring(2, 8);
  span.style.color = hexCodeSpan;
  generateColor();
});
