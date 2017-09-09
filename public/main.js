
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

  document.querySelector("button").classList.remove('baseColor');
  document.querySelector(".answer").classList.add('correctColor');
  document.querySelector(".wrongAnswer").classList.add('wrongColor');

}

// ========== timer code ==========
const tenSeconds = .16667;
const currentTime = Date.parse(new Date());
const totalTime = new Date(currentTime + tenSeconds*60*1000);
const audio = document.querySelector('audio')

function createTimer(endtime){
  const t = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  return {
    'total': t,
    'seconds': seconds};
}

function startTimer(id, endtime){
  const timer = document.getElementById(id);
  const timeinterval = setInterval(()=> {
    const t = createTimer(endtime);
    timer.innerHTML = t.seconds;
    if(t.total <= 0){
      clearInterval(timeinterval);
    }
  },1000);
>>>>>>> 88d651bee2db7c54704d48d7aa50e42801561334
}

//code base from stack overflow on audio timer
audio.addEventListener('canplaythrough', function() {
  setTimeout(function() {
    audio.pause()
  }, 10000);
}, false)

startTimer('timer', totalTime)
