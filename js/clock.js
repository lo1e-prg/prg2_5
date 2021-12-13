/*
    Stap 1.

    Schrijf de functie startClock().
    Roep deze functie aan als de pagina geladen is.

    Schrijf de functie testClock, die wordt aangeroepen door startClock.
    Deze functie moet bij elke 'digit', alle bars aanzetten. (.style.display='block')

    RESULTAAT: 88:88:88
*/

function startClock() {
    testClock();
    setInterval(drawClock, 1000);
}

window.addEventListener("load", startClock);

function testClock() {
    document.getElementById("-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
}

/* 
    Stap 2.

    Schrijf de functie testDigit(digitId)
    
    Deze functie moet een 8 tonen in het cijfer met het gegeven ID ('hour-1', 'hour-2', etc).
    HINT(s):
        - De ID's van de strepen zijn bijvoorbeeld: 'hour-1-hbar-1', 'hour-1-vbar-1'
        - er zijn 3 hbars en 4 vbars.

    Gebruik deze functie in testDigits ipv de code uit stap 1.

    RESULTAAT: 88:88:88
*/

function testDigit(digitId) {
    drawDigit(digitId, 9);
}

/*
    Stap 3.

    Schrijf de functie drawDigit(digitId, digit)
        - Deze functie moet de juiste bars aan zetten bij het cijfer met het gegeven ID.
        - Gebruik hierbij een switch statement om de verschillende digits af te handelen.
        - Herschrijf testDigit(digitId) zodat deze de functie drawDigit gebruikt.
*/

function drawDigit(digitId, digit) {
    switch (digit) {
        case 0:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 1:
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 2:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-3").style.display =
                "block";
            break;

        case 3:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 4:
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 5:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 6:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 7:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 8:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;

        case 9:
            document.getElementById(digitId + "-hbar-1").style.display =
                "block";
            document.getElementById(digitId + "-hbar-2").style.display =
                "block";
            document.getElementById(digitId + "-hbar-3").style.display =
                "block";
            document.getElementById(digitId + "-vbar-1").style.display =
                "block";
            document.getElementById(digitId + "-vbar-2").style.display =
                "block";
            document.getElementById(digitId + "-vbar-4").style.display =
                "block";
            break;
    }
}

/*
    Stap 4.
    
    Schrijf de functie resetClock().
        - Deze functie moet alle 'bars' uitzetten (.style.display='none').
*/

function resetClock() {
    let bars = document.getElementsByClassName('bar');

    for( let index = 0; index < bars.length ; index++) {
        bars[index].style.display = 'none';
    }
}

/*
    Stap 5.

    Schrijf de functie drawClock()
        - Deze functie moet elke 1s worden aangeroepen (vanuit startClock())
        - Deze functie roept als eerste aan: resetClock()
        - Zet hierin de volgende regels code:
            let now = new Date(); // Het huidige tijdstip opvragen
            let seconds = now.getSeconds(); // De seconden opvragen
            let secondsDigits = digitsOf(seconds); // Maakt een array van getallen van de seconden.
        - Toon de digits in de Array secondsDigits bij 'second-1' en 'second-2' (als < 10 toon dan een 0 voor second-1)
            (gebruik drawDigit() hiervoor)

*/

function drawClock() {
    resetClock();

    let now = new Date(); // Het huidige tijdstip opvragen
    let seconds = now.getSeconds(); // De seconden opvragen
    let secondsDigits = digitsOf(seconds); // Maakt een array van getallen van de seconden.

    if(seconds < 10) {
        drawDigit('second-1', 0);
        drawDigit('second-2', secondsDigits[0]);
    } else {
        drawDigit('second-1', secondsDigits[0]);
        drawDigit('second-2', secondsDigits[1]);
    }

    let minutes = now.getMinutes(); // De seconden opvragen
    let minutesDigits = digitsOf(minutes); // Maakt een array van getallen van de seconden.

    if(minutes < 10) {
        drawDigit('minute-1', 0);
        drawDigit('minutes-2', minutesDigits[0]);
    } else {
        drawDigit('minutes-1', minutesDigits[0]);
        drawDigit('minutes-2', minutesDigits[1]);
    }

    let hours = now.getHours(); // De seconden opvragen
    let hoursDigits = digitsOf(hours); // Maakt een array van getallen van de seconden.

    if(hours < 10) {
        drawDigit('hour-1', 0);
        drawDigit('hour-2', hoursDigits[0]);
    } else {
        drawDigit('hour-1', hoursDigits[0]);
        drawDigit('hour-2', hoursDigits[1]);
    }
}


/*
    Stap 6.
    
    Zorg dat ook de uren en minuten getoond worden in drawClock
        - Toon geen 0 bij uren in de eerste digit als de uren < 10
*/

/*
    Stap 7.

    Herschrijf resetClock zodat deze gebruik maakt van de methode (.getElementsByClassName)
        - https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName

*/

/*
    Stap 8

    Laat de seperators knipperen (1s aan / 1s uit).
*/

/**
 * Returns an Array of digits of the given Number
 * @param {Number} number Any number
 * @returns Array<Number>
 */
function digitsOf(number) {
    return number
        .toString()
        .split("")
        .map((digit) => parseInt(digit));
}
