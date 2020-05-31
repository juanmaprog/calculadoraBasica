function init() {}

let audio;

function playClick() {
  //   console.log(audio);

  // PATRÓN SINGLETON
  if (audio == null) {
    audio = document.getElementById("audio");
  }

  audio.play();
}
