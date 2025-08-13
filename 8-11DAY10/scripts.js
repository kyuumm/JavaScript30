//get Element------------------------------------
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

//[]:css属性选择器，选择含有data-skip属性的元素
//.toggle是类选择器语法，选择class为toggle的元素
//function----------------------------------------
function togglePlay() {
  // if (video.paused) { video.play(); }
  // else { video.pause(); }
  video[video.paused ? 'play' : 'pause']();

}

function updateButton() {
  const icon = this.paused ? '▶' : '⏸';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;

}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
//hook up event listener--------------------------
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => { mousedown && scrub(e) });
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
