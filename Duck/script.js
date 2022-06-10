console.log('ciao :D')
const textArea = document.querySelector('textArea')
const play = document.querySelector('button')
const pitchBar = document.querySelector('input')
const duck = document.querySelector('figure')

play.addEventListener('click', function() {
const textLenght = textArea.value.trim().length
console.log(textLenght);

if(textLenght > 0) { 
    talk();
}
})

function talk() {
  const text = textArea.value;
  const pitch = pitchBar.value;

  const utterance = new SpeechSynthesisUtterance(text);


utterance.volume = 10;
utterance.rate = 1;
utterance.pitch = pitch;

speechSynthesis.speak(utterance);

  
console.log(utterance);

utterance.addEventListener('start', function() {

    duck.classList.add('talking');
});

utterance.addEventListener('end', function(){
    duck.classList.remove('talking')
})

}