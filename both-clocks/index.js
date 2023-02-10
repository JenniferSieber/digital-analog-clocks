
setInterval(digitalDisplay, 1000)
setInterval(analogDisplay, 1000)

//display todays date
function displayDate() {
  var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  let currentDate = new Date()
  let dayOfWeek = currentDate.getDay()
  let numberOfDay = currentDate.getDate()
  let month = currentDate.getMonth()
  let year = currentDate.getFullYear()

  document.querySelector('.date-display').innerHTML = 
  dayList[dayOfWeek] + ', ' + monthList[month] + '  ' + numberOfDay + ', ' + year
}

//digital clock 
function digitalDisplay() {
  let currentDate = new Date()
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()
  let seconds = currentDate.getSeconds()
  let amOrPm = 'AM'
  
  if (hours >= 12) {
    amOrPm = 'PM'
  }
  if (hours > 12) {
    hours = hours - 12
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  
  document.querySelector('.time-display').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm
}

// analog clock
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function analogDisplay() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
 }

 function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
 }

digitalDisplay()
analogDisplay() 
displayDate()