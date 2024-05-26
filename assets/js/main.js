// function iconToX() {
//     console.log
//     x.classList.toggle("change");
// }

// typewriter effect function for header-paragraph
window.onload = function() {
  const text = document.getElementById("header-paragraph");
  text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter, i) => {
    letter.style.setProperty('--i', i);
  })
};

// Stops the pop-up text animation and delay
document.getElementById("header-paragraph").addEventListener("mouseover", function() {
  this.classList.add('hovered');
});


