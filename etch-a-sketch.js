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
      divs.style.cssText = "background-color: black;";
    });
  }
}


const btn = document.querySelector(".size");
btn.addEventListener("click", () => {
 /* divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.classList.remove("js");
  }); */
  //Need to remove previous children!
  
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
  console.log(grid);
  
  /*--------------------------- */
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
 
  
  /*divs2.addEventListener("mousemove", () => {
        divs2.style.cssText = "background-color: black;";
      });;*/
});

// border-top: 2px solid black; border-left: 2px solid black;
