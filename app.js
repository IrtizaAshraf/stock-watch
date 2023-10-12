
const div = document.querySelector('.second')
const mint = document.querySelector('.minuts')
const hour = document.querySelector('.hour')

const start = document.querySelector('.start');
const stops = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let seconds = 0
let minute = 0;
let hours = 0;
let interval;
start.addEventListener('click', () => {
      interval = setInterval(() => {
          seconds += 1
          div.innerHTML = seconds
          if (seconds === 60) {
              minute += 1;
              mint.innerHTML = minute
              seconds = 0;
          }
  
          if (minute === 60) {
              hours += 1;
              hour.innerHTML = hours
              minute = 0;
          }
      }, 1000)
      start.disabled = true
})



stops.addEventListener('click' , ()=>{
    clearInterval(interval)
    start.disabled = false

})


reset.addEventListener('click' , ()=>{
    clearInterval(interval);
    seconds = 0
    div.innerHTML = '00'

    minute = 0;
    mint.innerHTML = '00 :'
    hours = 0;
    hour.innerHTML = '00 :'
    start.disabled = false
})



// const div = document.querySelector('.second')
// const mint = document.querySelector('.minuts')
// const hour = document.querySelector('.hour')

// const start = document.querySelector('.start');
// const stops = document.querySelector('.stop');
// const reset = document.querySelector('.reset');


// let second = 0;
// let interval;
// let minutes = 0;
// let hours = 0;
// start.addEventListener('click', () => {
//     interval = setInterval(() => {
//         second += 1
//         div.innerHTML = second
//         if (second === 60) {
//             minutes += 1;
//             mint.innerHTML = minutes
//             second = 0;
//         }

//         if (minutes === 60) {
//             hours += 1;
//             hour.innerHTML = hours
//             minutes = 0;
//         }
//     }, 1000)
//     start.disabled = true
// })
// stops.addEventListener('click', () => {
//     clearInterval(interval);
//     start.disabled = false
// })
// reset.addEventListener('click', () => {
//     clearInterval(interval);
//     second = 0
//     div.innerHTML = '00'

//     minutes = 0;
//     mint.innerHTML = '00'
//     hours = 0;
//     hour.innerHTML = '00'
//     start.disabled = false
// })
