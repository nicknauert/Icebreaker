document.getElementById("MyElement").classList.add('MyClass');

document.getElementById("MyElement").classList.remove('MyClass');


function showAnswers(){

  document.querySelector("button").classList.remove('baseColor');
  document.querySelector(".answer").classList.add('correctColor');
  document.querySelector(".wrongAnswer").classList.add('wrongColor');
  
}
