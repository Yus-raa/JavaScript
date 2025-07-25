function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

// What is playSound() doing?
// This is the main function that:
// Detects which key was pressed.
// Finds the matching <audio> and <div class="key"> using data-key="...".
// Plays the audio and adds a visual class.

window.addEventListener('keydown', playSound);

function removeTransition(e){
  if(e.propertyName !== "transform") return;
  e.target.classList.remove('playing');
}

// What is removeTransition() doing?
// This function is called when a CSS transition ends.
// e is the event object.
// e.propertyName tells you which CSS property finished transitioning.
// If it is "transform", it removes the playing class from the key (so the animation can reset).
// This is necessary to allow the animation to happen every time you press the key. Otherwise, it would only work once.

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// This finds all elements with the class .key and listens for when their CSS transition ends.
// When it ends, it calls removeTransition, which removes the playing class.