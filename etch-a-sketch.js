function createGrid(unitsPerSide) {
  const grid = document.querySelector(".container");
  const squareSize = 500 / unitsPerSide - 2;
  for (let j = 0; j < unitsPerSide; j++) {
    for (let i = 0; i < unitsPerSide; i++) {
      const divs = document.createElement("div");
      divs.style.cssText = `border: 1px solid black; height: ${squareSize}px; width: ${squareSize}px;`;
      divs.classList.add("js");
      grid.appendChild(divs);
    }
  }

  const alldiv = grid.querySelectorAll("div");
  alldiv.forEach((div) => {
    div.addEventListener("mousemove", () => {
      div.setAttribute(
        "style",
        `background-color: black; border: 1px solid black; height: ${squareSize}px; width: ${squareSize}px;`
      );
    });
  });
}
createGrid(16);

function deleteGrid() {
  const grid = document.querySelector(".container");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function resetGrid(size) {
  deleteGrid();
  createGrid(size);
}

const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
  const units = prompt("How many squares per side?");
  resetGrid(units);
});
