
const pomo = Date.now() + 25 * 60 * 1000

const countdown = () => {
  const current = Date.now()
  const totalSeconds = (pomo - current) / 1000

  if(totalSeconds>=0) {
    const mins = Math.floor(totalSeconds / 60)
    const seconds = Math.round(totalSeconds % 60)

    document.querySelector('#mins').innerHTML = format(mins)
    document.querySelector('#seconds').innerHTML = format(seconds)
  
  } else if(totalSeconds<=0) {
    document.body.innerHTML = ""   
    playConfetti()
  }
}

const format = (time) => time < 10 ? `0${time}` : time

const playConfetti = () => {
  const music = new Audio('victory.mp3');
  music.play();
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()
}

countdown()
setInterval(countdown, 1000)
