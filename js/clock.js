

function drawDigit(idPrefix, digit) {
    switch (digit) {
        case 0:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-3');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 1:
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 2:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-3');
            break;
        case 3:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 4:
            drawCrystal(idPrefix, 'hbar-2');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 5:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 6:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-3');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 7:
            drawCrystal(idPrefix, 'hbar-1');
            
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 8:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-3');
            drawCrystal(idPrefix, 'vbar-4');
            break;
        case 9:
            drawCrystal(idPrefix, 'hbar-1');
            drawCrystal(idPrefix, 'hbar-2');
            drawCrystal(idPrefix, 'hbar-3');
        
            drawCrystal(idPrefix, 'vbar-1');
            drawCrystal(idPrefix, 'vbar-2');
            drawCrystal(idPrefix, 'vbar-4');
            break;
    }
}


function drawCrystal(idPrefix, bar) {
    let id = idPrefix + '-' + bar;
    document.getElementById(id).style.display = "block";
}

function startClock() {
    drawDigit('hour-1', 0);
    drawDigit('hour-2', 0);
    drawDigit('minute-1', 0);
    drawDigit('minute-2', 0);
    drawDigit('second-1', 0);
    drawDigit('second-2', 0);
 
    setInterval(drawClock, 1000);
 }
 
 function resetDigits() {
     let bars = document.getElementById('clock').getElementsByClassName('bar');
     for(let index = 0; index < bars.length; index++){
         bars[index].style.display = "none";
     }
  }

function drawClock() {
    let now = new Date();

    resetDigits();

    drawHours(now);
    drawMinutes(now);
    drawSeconds(now);
}

function drawSeconds(time) {
    let seconds = digitsOf(time.getSeconds());
    
    if(seconds.length > 1) {
        drawDigit('second-1', seconds[0]);
        drawDigit('second-2', seconds[1]);
    } else {
        drawDigit('second-2', seconds[0]);
    }

}

function drawMinutes(time) {
    let minutes = digitsOf(time.getMinutes());
    
    if(minutes.length > 1) {
        drawDigit('minute-1', minutes[0]);
        drawDigit('minute-2', minutes[1]);
    } else {
        drawDigit('minute-2', minutes[0]);
    }

}

function drawHours(time) {
    let hours = digitsOf(time.getHours());
    
    if(hours.length > 1) {
        drawDigit('hour-1', hours[0]);
        drawDigit('hour-2', hours[1]);
    } else {
        drawDigit('hour-2', hours[0]);
    }

}

/**
 * 
 * @param {Number} number Any number
 * @returns Array<Number>
 */
function digitsOf(number) {
    return number.toString().split('').map((digit) => parseInt(digit))
}

window.addEventListener('load', startClock);