// main page nav from clicking cards
const cardNav = (e) => {
  const main = document.querySelector('main')
  const nav = document.querySelector('nav')
  const header = document.querySelector('header')

  nav.classList.remove('hidden')
  header.classList.add('hidden')
  main.innerHTML = `<div class='open-container'><h1>${
    e.target.innerHTML === 'SOUND'
      ? '<i class="fa-solid fa-music"></i>'
      : e.target.innerHTML
  }</h1></div>`
}

const initNav = () => {
  const navButtons = document.querySelectorAll('.sidebar button')
  const main = document.querySelector('main')
  const nav = document.querySelector('nav')
  const header = document.querySelector('header')

  navButtons[0].addEventListener('click', () => {
    console.log('testtt')
    nav.classList.add('hidden')
    header.classList.remove('hidden')
    main.innerHTML = ''
    main.append(createHome())
  })

  for (let i = 1; i < 5; i++) {
    navButtons[i].addEventListener('click', () => {
      main.innerHTML = `<div class='open-container'><h1>${navButtons[i].innerHTML}</h1></div>`
    })
  }
}

// might just toggle .hidden, idk yet
const createHome = () => {
  const div = document.createElement('div')
  div.classList.add('sub-header')
  div.innerHTML = `
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
      facilisis dui imperdiet est sodales, et lobortis nisi mattis. Aliquam
      vulputate massa vitae massa aliquet rutrum. Nunc euismod, quam eget
      eleifend venenatis, justo diam tempus turpis, quis iaculis quam tortor
      ut nulla. Proin pharetra tincidunt odio sed pretium. Nullam laoreet
      arcu vel ante semper facilisis. Nunc quis dolor eu nunc blandit
      tincidunt. Suspendisse potenti. Ut sit amet tempor ligula, nec finibus
      massa. Duis sagittis, turpis ac fringilla finibus, turpis lectus
      ullamcorper lectus, quis sollicitudin tortor magna nec ex. Sed
      viverra, neque ac pulvinar placerat, odio turpis commodo enim, vel
      efficitur mi neque sit amet velit.
    </p>
    </div>
    <div class="work-container">
    <section class="card 2d">
      <button>2D</button>
    </section>
    <section class="card 3d">
      <button>3D</button>
    </section>
    <section class="card audio">
      <button>SOUND</button>
    </section>
  `
  const cardButtons = div.querySelectorAll('.card button')
  cardButtons.forEach((button) => {
    button.addEventListener('click', cardNav)
  })

  return div
}

export { cardNav, initNav }
