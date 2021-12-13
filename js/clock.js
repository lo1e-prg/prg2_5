/*
    Stap 1.

    Schrijf de functie startClock().
    Roep deze functie aan als de pagina geladen is.

    Schrijf de functie testClock, die wordt aangeroepen door startClock.
    Deze functie moet bij elke 'digit', alle bars aanzetten. (.style.display='block')

    RESULTAAT: 88:88:88
*/

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

/*
    
*/

/*
    Stap 3.

    Schrijf de functie drawDigit(digitId, digit)
        - Deze functie moet de juiste bars aan zetten bij het cijfer met het gegeven ID.
        - Gebruik hierbij een switch statement om de verschillende digits af te handelen.
        - Herschrijf testDigit(digitId) zodat deze de functie drawDigit gebruikt.
*/

/*
    Stap 4.
    
    Schrijf de functie resetClock().
        - Deze functie moet alle 'bars' uitzetten (.style.display='none') 
          en als eerst aangeroepen worden door drawClock.
*/


/*
    Stap 5.

    Schrijf de functie drawClock()
        - Deze functie moet elke 1s worden aangeroepen (vanuit startClock())
        - Zet hierin de volgende regels code:
            let now = new Date(); // Het huidige tijdstip opvragen
            let seconds = now.getSeconds(); // De seconden opvragen
            let secondsDigits = digitsOf(seconds); // Maakt een array van getallen van de seconden.
        - Toon de digits in de Array secondsDigits bij 'second-1' en 'second-2' (als < 10 toon dan een 0 voor second-1)
            (gebruik drawDigit() hiervoor)

*/

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




/**
 * Returns an Array of digits of the given Number
 * @param {Number} number Any number
 * @returns Array<Number>
 */
 function digitsOf(number) {
    return number.toString().split('').map((digit) => parseInt(digit))
}

