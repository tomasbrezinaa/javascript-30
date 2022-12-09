window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function when key value is not matching data-key
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing')

})

function removeTransition(e) {
    console.log(e.propertyName !== 'transform') return;
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))