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
    testDigit('hour-1');
    testDigit('hour-2');
    testDigit('minute-1');
    testDigit('minute-2');
    testDigit('second-1');
    testDigit('second-2');
}

/* 
    Stap 2.

    Schrijf de functie testDigit(digitId)
    
    Deze functie moet een 8 tonen in het cijfer met het gegeven ID ('hour-1', 'hour-2', etc).
    HINT(s):
        - De ID's van de strepen zijn bijvoorbeeld: 'hour-1-hbar-1', 'hour-1-vbar-1'
        - er zijn 3 hbars en 4 vbars.

    Gebruik deze functie in testDigit ipv de code uit stap 1.

    RESULTAAT: 88:88:88
*/

function testDigit(digitId) {
    drawDigit(digitId, 8);
}


/*
    Stap 3.

    Schrijf de functie drawDigit(digitId, digit)
        - Deze functie moet de juiste bars aan zetten bij het cijfer met het gegeven ID.
        - Gebruik hierbij een switch statement om de verschillende digits af te handelen.
        - Herschrijf testDigit(digitId) zodat deze de functie drawDigit gebruikt.
*/

function drawDigit(digitId, digit) {
    switch(digit) {
        case 1:
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;

        case 2:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-3").style.display = "block";
            break;
        
        case 3:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;
        
        case 4:
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;

        case 5:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;
    
        case 6:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;

        case 7:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;
                
        case 8:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;

        case 9:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-2").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;

        case 0:
            document.getElementById(digitId + "-hbar-1").style.display = "block";
            document.getElementById(digitId + "-hbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-1").style.display = "block";
            document.getElementById(digitId + "-vbar-2").style.display = "block";
            document.getElementById(digitId + "-vbar-3").style.display = "block";
            document.getElementById(digitId + "-vbar-4").style.display = "block";
            break;
    }
}

/*
    Stap 4.
    
    Schrijf de functie resetClock().
        - Deze functie moet alle 'bar' uitzetten (.style.display='none').
*/

function resetClock() {
    resetDigit('hour-1');
    resetDigit('hour-2');
    resetDigit('minute-1');
    resetDigit('minute-2');
    resetDigit('second-1');
    resetDigit('second-2');
}

function resetDigit(digitId) {
    document.getElementById(digitId + "-hbar-1").style.display = "none";
    document.getElementById(digitId + "-hbar-2").style.display = "none";
    document.getElementById(digitId + "-hbar-3").style.display = "none";
    document.getElementById(digitId + "-vbar-1").style.display = "none";
    document.getElementById(digitId + "-vbar-2").style.display = "none";
    document.getElementById(digitId + "-vbar-3").style.display = "none";
    document.getElementById(digitId + "-vbar-4").style.display = "none";
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
        - Toon de digits in de Array secondsDigits bij 'second-1' en 'second-2' (als seconds < 10 toon dan een 0 voor second-1)
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

    let minutes = now.getMinutes(); // De minuten opvragen
    let minutesDigits = digitsOf(minutes); // Maakt een array van getallen van de minuten.

    if(minutes < 10) {
        drawDigit('minute-1', 0);
        drawDigit('minute-2', minutesDigits[0]);
    } else {
        drawDigit('minute-1', minutesDigits[0]);
        drawDigit('minute-2', minutesDigits[1]);
    }
}

/*
    Stap 6.
    
    Zorg dat ook de uren en minuten getoond worden in drawClock
        - Toon een 0 bij minuten in de eerste digit als de minuten < 10
        - Toon een 0 bij uren in de eerste digit als de uren < 10
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
    return number.toString().split('').map((digit) => parseInt(digit));
}

