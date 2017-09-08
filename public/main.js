
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

<<<<<<< HEAD
=======
  document.querySelector("button").classList.remove('baseColor');
  document.querySelector(".answer").classList.add('correctColor');
  document.querySelector(".wrongAnswer").classList.add('wrongColor');

}


// ========== timer code ==========
const fifteenSeconds = .16667;
const currentTime = Date.parse(new Date());
const totalTime = new Date(currentTime + fifteenSeconds*60*1000);

function createTimer(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  return {
    'total': t,
    'seconds': seconds};
}

function startTimer(id, endtime){
  const timer = document.getElementById(id);
  const timeinterval = setInterval(function(){
    const t = createTimer(endtime);
    timer.innerHTML = t.seconds;
    if(t.total <= 0){
      clearInterval(timeinterval);
    }
  },1000);
>>>>>>> 88d651bee2db7c54704d48d7aa50e42801561334
}

startTimer('timer', totalTime)
