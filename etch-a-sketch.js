// task 1 make a div change color while hovered over
const div = document.querySelector(".js");
div.addEventListener("mousemove", () => {
  div.style.cssText = "background-color: black; color: white;";
});

const grid = document.querySelector(".container");

  for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
    const divs = document.createElement("div");
    divs.classList.add("js");
    grid.appendChild(divs);
    divs.addEventListener("mousemove", () => {
        divs.style.cssText = "background-color: black; color: white;";
    });
    }
  }
/*
divs.addEventListener("mousemove", () => {
    divs.style.cssText = "background-color: black; color: white;";
  });*/