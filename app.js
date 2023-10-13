
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
let intervalmint;
let intervalhour;

// start function  exciute ---------- start>
start.addEventListener('click', () => {
   // setinterval for second----- start>
   interval = setInterval(() => {
       if (seconds === 60) {
           seconds = 1;
        }
        else {
            seconds += 1;
        }
        
        if (seconds < 10) {
            div.innerHTML = `0${seconds}`;
        }
        else {
            div.innerHTML = seconds;
        }

    }, 1000)
    // setinterval for second----- end>

    
    // setinterval for minuts----- start>
    intervalmint = setInterval(() =>{
        
        
        if (minute === 60) {
            minute = 1;
        }
        else {
            minute += 1;
        }
        
        if (minute < 10) {
            mint.innerHTML = `0${minute}`;
        }
        else {
            mint.innerHTML = minute;
        }
    },60000)
    // setinterval for minuts----- end>

    // setinterval for hours----- start>

    intervalhour = setInterval(() =>{

        if (hours === 60) {
            hours = 1;
        }
        else {
            hours += 1;
        }
        
        if (hours < 10) {
            hour.innerHTML = `0${hours}`;
        }
        else {
            hour.innerHTML = hours;
        }
    },3600000) 
    
    // setinterval for hours----- end>
    
    start.disabled = true
})

// start function  exciute ---------- end>



// stop function  exciute ---------- start>


stops.addEventListener('click' , ()=>{
    clearInterval(interval)
    start.disabled = false

})
// stop function  exciute ---------- end>


// reset function  exciute ---------- start>

reset.addEventListener('click' , ()=>{
    clearInterval(interval);
    seconds = 0
    div.innerHTML = '00'
    
    minute = 0;
    mint.innerHTML = '00'
    hours = 0;
    hour.innerHTML = '00'
    start.disabled = false
})
// reset function  exciute ---------- end>


