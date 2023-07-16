const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {
  console.log(newUrl);

  // playing the sound
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  // looping
  const number = i < 9 ? '0' + (i + 1) : (i + 1);
  const newUrl = '24-piano-keys/key' + number + '.mp3';

  // onclick play and add click animation
  pianoKey.addEventListener('click', () => {
    playSound(newUrl);
    pianoKey.classList.add('click-animation');
    setTimeout(() => {
      pianoKey.classList.remove('click-animation');
    }, 300);
  });
});
