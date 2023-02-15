// task 1 make a div change color while hovered over
const div = document.querySelector(".js");
div.addEventListener("mousemove", () => {
    div.style.cssText = "background-color: black; color: white;"
})