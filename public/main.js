
function showAnswers(){
  let basecolor = document.querySelectorAll(".baseColor");
  basecolor.forEach((item) => {
    item.classList.remove("baseColor");
  })
  let wrongArr = document.querySelectorAll(".wrongAns");
  wrongArr.forEach((item) => {
    item.classList.add('wrongColor');
  })
  document.querySelector(".correctAns").classList.add('correctColor');

}
