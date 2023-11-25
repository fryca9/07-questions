//using selectors inside the element
// traversing the dom
const toggle = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

toggle.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    questions[index].classList.toggle("show-text");
  });
});
