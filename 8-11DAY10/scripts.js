//get Element------------------------------------
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelector('.player__slider');
const skipButtons = player.querySelector('[data-skip]');

//[]:css属性选择器，选择含有data-skip属性的元素
//.toggle是类选择器语法，选择class为toggle的元素
//function----------------------------------------
function togglePlay() {
  // if (video.paused) { video.play(); }
  // else { video.pause(); }
  video[video.paused ? 'play' : 'pause']();
  button.textContent = '||'
}


//hook up event listener--------------------------
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
