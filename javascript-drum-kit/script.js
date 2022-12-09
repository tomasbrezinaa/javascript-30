function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function when key value is not matching data-key
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // if its not transform skip whole line
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
