import './scroll'
import { cardNav, initNav } from './nav'

const cardButtons = document.querySelectorAll('.card button')
cardButtons.forEach((button) => {
  button.addEventListener('click', cardNav)
})

initNav()
