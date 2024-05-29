'use strict'

var gHeight = 100
var gWidth = 100

function onBallClick(elBall, maxDiameter) {
  var currentHeight = parseInt(window.getComputedStyle(elBall).height)

  var newHeight = currentHeight + getRandomIntInclusive(20, 60)
  elBall.style.backgroundColor = getRandomColor()

  if (newHeight > maxDiameter) newHeight = 100

  elBall.style.height = newHeight + 'px'
  elBall.style.width = newHeight + 'px'
  elBall.innerHTML = newHeight
}

function changeColors() {
  var elball1 = document.querySelector('.ball1')
  var elball2 = document.querySelector('.ball2')

  var tempColorBall1 = elball1.style.backgroundColor
  elball1.style.backgroundColor = elball2.style.backgroundColor
  elball2.style.backgroundColor = tempColorBall1
}
