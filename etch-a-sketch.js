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
        div.setAttribute("style", `background-color: black; border: 1px solid black; height: ${squareSize}px; width: ${squareSize}px;`);
  });
});
}
createGrid(16);

function deleteGrid() {
  const grid = document.querySelector(".container");
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

function resetGrid(size) {
  deleteGrid()
  createGrid(size)
}

const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
  const units = prompt("How many squares per side?");
  resetGrid(units);
})




/*
function fill() {
  divs.style.cssText = "background-color: black;";
};*/

/*
const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
  divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.classList.remove("js");
  }); 
  //Need to remove previous children!
  
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  console.log(grid);
  
  
  const numSides = prompt("enter amount of boxes per side");
  const squareSideLength = 500 / numSides - 2; // this takes border into account
  
  console.log(typeof numSides);
  console.log(typeof squareSideLength)
  
  for (let j = 0; j < numSides; j++) {
    for (let i = 0; i < numSides; i++) {
      const divs2 = document.createElement("div");
      
       divs2.style.cssText = `height: ${squareSideLength}px; width: ${squareSideLength}px; `;
      
      divs2.classList.add("js2");
      
      grid.appendChild(divs2);
      divs2.addEventListener("mousemove", () => {
        divs2.style.cssText = "background-color: red;";
      });
      
       
    }
    
  }
 */

/*divs2.addEventListener("mousemove", () => {
        divs2.style.cssText = "background-color: black;";
      });;
});*/

// border-top: 2px solid black; border-left: 2px solid black;
