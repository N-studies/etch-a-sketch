// task 1 make a div change color while hovered over
/*const div = document.querySelector(".js");
div.addEventListener("mousemove", () => {
  div.style.cssText = "background-color: black; color: white;";
});*/

const grid = document.querySelector(".container");

for (let j = 0; j < 100; j++) {
  for (let i = 0; i < 100; i++) {
    const divs = document.createElement("div");
    divs.classList.add("js");
    grid.appendChild(divs);
    divs.addEventListener("mousemove", () => {
      divs.style.cssText = "background-color: black; color: white;";
    });
  }
}

const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
  divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.classList.toggle("js");
  });


  //numSides = prompt("enter amount of boxes per side");
  //squareSideLength = 500 / numSides - 2; // this takes border into account
});

function sizeOfGrid(sidelength) {
    const grid = document.querySelector(".container");

for (let j = 0; j < 100; j++) {
  for (let i = 0; i < 100; i++) {
    const divs = document.createElement("div");
    divs.classList.add("js");
    grid.appendChild(divs);
    divs.addEventListener("mousemove", () => {
      divs.style.cssText = "background-color: black; color: white;";
    });
  }
}
}