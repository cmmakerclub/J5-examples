var Readable = require('stream').Readable  
var util = require('util')  
var five = require('johnny-five')


var board = new five.Board({repl: false})
var button = document.getElementById('led-button')
var state = false

board.on('ready', function() {
  document.getElementById('board-status').src = 'icons/ready.png'
  button.className = 'button'
  var led = new five.Led(13)
  
  button.addEventListener('click', function () {
    state = !state
    if (state) {
      document.getElementById('led-status').src = 'icons/led-on.png'
      led.on()
    }
    else {
      document.getElementById('led-status').src = 'icons/led-off.png'
      led.off()
    }
  })
})