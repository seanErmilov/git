'use strict'

var gHeight = 100
var gWidth = 100

function onBallClick(elBall) {
  var currentHeight = parseInt(window.getComputedStyle(elBall).height)
  console.log('currentHeight :', currentHeight)
  var newHeight = currentHeight + 50

  elBall.style.height = newHeight + 'px'
  elBall.style.width = newHeight + 'px'
  elBall.innerHTML = newHeight

  console.log(`New height: ${elBall.style.height}`)
}
