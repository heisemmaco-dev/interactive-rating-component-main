const form = document.querySelector('[data-js-form]')
const template = document.querySelector('[data-js-template]')
const wrap = document.querySelector('[data-js-wrap]')

let mute = document.querySelector('.white')

mute.addEventListener('click', wehear)

function wehear() {
  if (mute.innerHTML === '<i class="fa-solid fa-volume-high" style="color: #c9c9c9;"></i>'){
    mute.innerHTML = '<i class="fa-solid fa-volume-xmark" style="color: #c9c9c9;"></i>'
  } else {
    mute.innerHTML = '<i class="fa-solid fa-volume-high" style="color: #c9c9c9;"></i>'
  }
}

function view(event) {
 
  event.preventDefault()

 
  let rating = new FormData(event.target).get('rating')

  if (rating) {
    let button = document.querySelector('[data-js-button]')
    button.innerHTML = 'Loading...'
    setTimeout(
      function () {
        wrap.addEventListener('animationend', () => {
          wrap.innerHTML = template.innerHTML.replace(/{{ rating }}/, rating)
          wrap.classList.replace('animate-out', 'animate-in')
        })


        if (mute.innerHTML === '<i class="fa-solid fa-volume-high" style="color: #c9c9c9;"></i>') {
          playSound()
        } else {
          muteSound()
        }
        wrap.classList.add('animate-out')
        wrap.style.height = wrap.offsetHeight + "px";
      }, 1000 
    )
  } 

  
}

function playSound() {
  const audio = new Audio("./images/zapsplat_multimedia_game_sound_sci_fi_game_hit_fizz_whoosh_78169.mp3")
  audio.play()
  audio.volume = 0.2
}

function muteSound() {
  const audio = new Audio("./images/zapsplat_multimedia_game_sound_sci_fi_game_hit_fizz_whoosh_78169.mp3")
  audio.play()
  audio.volume = 0
}

form.addEventListener('submit', view)
