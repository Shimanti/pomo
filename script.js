
const pomo = Date.now() + 25 * 60 * 1000

const countdown = () => {
    const current = Date.now()
    const totalSeconds = (pomo - current) / 1000

    if(totalSeconds>=0) {
      const mins = Math.floor(totalSeconds / 60)
      const seconds = Math.round(totalSeconds % 60)

      document.querySelector('#mins').innerHTML = format(mins)
      document.querySelector('#seconds').innerHTML = format(seconds)
    
    } else {
      document.body.innerHTML = ""   
      playFireworks('long.wav', 2000)
      playConfetti()
      totalSeconds=0
    }
  }

const format = (time) => time < 10 ? `0${time}` : time

const playConfetti = () => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
}

const playFireworks = (snippet, time) => {
  let music = new Audio(snippet)
  music.play()
  setTimeout(() => { music.pause() }, time);
  }


countdown()
setInterval(countdown, 1000)
