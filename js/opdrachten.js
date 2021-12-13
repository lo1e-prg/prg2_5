/*

Opdracht 1 - Fruits

Maak de functie genaamd showFruit
    Maak de variabel fruit, geef deze de value van het element met het id="input-fruit"
    Schakel tussen de waarde van fruit
        Indien de variabel fruit de waarde 'druif' heeft
            Toon de tekst "Je hebt een druif gekozen!" in het element met de id="fruit"
        Indien de variabel fruit de waarde 'appel' heeft
            Toon de tekst "Je hebt een appel gekozen!"
        Indien de variabel fruit de waarde 'sinaasappel' heeft
            Toon de tekst "Je hebt een sinaasappel gekozen!" in het element met de id="fruit"
        Indien de variabel fruit een andere waarde heeft
            Toon de tekst "Fruit soort " + fruit + " niet gevonden."

Wanneer je op de knop met de id="show-fruit" druk, word de fucntie showFruit uitegevoerd.

*/



/*

Opdracht 2 - Colors

Gebruik de functie genaamd changeTextColor
    Maak de variabel fruit, geef deze de value van het element met het id="input-fruit"
    Schakel tussen de waarde van fruit
        Indien de variabel fruit de waarde 'appel' heeft
            Verander de tekst kleur van de body naar 'red'
        Indien de variabel fruit de waarde 'druif' heeft
            Verander de tekst kleur van de body naar 'purple'
        Indien de variabel fruit de waarde 'sinaasappel' heeft
            Verander de tekst kleur van de body naar 'ornage'
        Indien de variabel fruit een andere waarde heeft.
            Verander de tekst kleur van de body naar '#c1c1c1' (Of welke kleur jijzelf wilt.)

Waneer de input van de element met het id="input-fruit" veranderd, word de functie changeTextColor uitgevoerd.

*/

function changeTextColor(){

}

document.getElementById("input-fruit").addEventListener('input', changeTextColor);

/*

Opdracht 3 - Background colors

Maak de functie genaamd changeBackgroundColor
    Maak de variabel color, geef deze de style.color van de body
    Maak de variabel article, geef deze de waarde: document.getElementsByTagName('article')[0];
        Schakel tussen de waarde van color
            Indien de variabel color de waarde 'red' heeft
                Zet de backgroundColor van de variabel article naar 'purple'
            Indien de variabel color de waarde 'purple' heeft
                Zet de backgroundColor van de variabel article naar 'orange'
            Indien de variabel color de waarde 'orange' heeft
                Zet de backgroundColor van de variabel article naar 'red'
            Indien de variabel color een andere waarde heeft
                Zet de backgroundColor van de variabel article naar 'black'

Zorg dat de functie changeBackgroundColor iedere 10 milisconde uitgevoerd word.

*/

function changeBackgroundColor(){
    let color = document.body.style.color;

}



/*
    Opdracht 3 EXTRA - Change all tag backgroundcolor

    Maak de functie changeTagElementsStyle met de argumenten, tag en color
        Maak de variabel elements aan, geef deze de waarde alle elementen met de tagname van tag. (de variabel elements is nu een array met alle elementen met de tag die mee gegeven word in het ergument)
        Voor iedere element binnen de variabel elements
            Geef de element de backgroundColor mee met het argument color

    Maak de functie changeBackgroundColorShort
        Maak de variabel met de naam color, geef deze de waarde van de body de style color
        Maak de variabel met de naam tag, geef deze de waarde article
        Schakel tussen de variabel color
            Indien de variabel color de waarde 'red' heeft
                roep de functie changeTagElementsStyle aan met de argumenten, de variabel tag en 'purple'
            Indien de variabel color de waarde 'purple' heeft
                roep de functie changeTagElementsStyle aan met de argumenten, de variabel tag en 'orange'
            Indien de variabel color de waarde 'orange' heeft
                roep de functie changeTagElementsStyle aan met de argumenten, de variabel tag en 'red'
            Indien de variabel color een andere waarde heeft
                roep de functie changeTagElementsStyle aan met de argumenten, de variabel tag en 'black'

    Zorg dat de functie changeBackgroundColorShort iedere 100 miliseconde aangeroepen word.

*/


/*

Opdracht 4 - Show coins

Maak de functie genaamd showCoins
    Maak een variabel genaamd coins met als waarde een array met de daarin de waardes, "DogeCoin", "BitCoin", , "Ethereum", "Holo"
    Voor elke string in deze array
        ALS een waarde binnen de array leeg is
            geef dan de waarde false terug
        Voeg iedere waarde binnen de array toe als lijst item in het element met de id="coins" (<li> array </li>)
    
    geef de waarde true terug


Maak de functie genaamd checkValues
    ALS showCoins de waarde false terug geeft
        Toon dan het bericht "Waardes ontbreken binnen de array. For-loop is gestopt." in het element met de id="error"


Wanneer er op de knop met het id="show-coins" word gedrukt, voer de functie checkValues uit.
*/

function showCoins(){
    let coins = ["DogeCoin", "BitCoin", ,"Ethereum", "Holo"];


    return true;
}

function checkValues(){
	
}




/*

Opdracht 5 - Calculator

Maak de functie genaamd calculate met de argumenten, number1, number2, operator
    Maak een variabel genaamd answer, geef deze de waarde 0
    Schakel tussen het argument operator
        Indien de operator het symbool * is
            Krijgt de variabel answer de waarde, number1 keer number2
        Indien de operator het symbool + is
            Krijgt de variabel answer de waarde, number1 plus number2
        Indien de operator het symbool - is
            Krijgt de variabel answer de waarde, number1 min number2
        Indien de operator het symbool ^ is
            Krijgt de variabel answer de waarde, number1
            Voor iedere: begin waarde index = 0; de variabel index kleiner dan number2-1; telt er 1 op bij index
                Krijgt de variabel answer de waarde, answer *= number1
        Indien de operator niet herkent word
            Krijgt de variabel answer de waarde, "Could not find operator";
    
    
    geef de variabel answer terug aan het einde van de functie

*/

function calculate(number1, number2, operator){

}

/*

Opdracht 6 - Gebruik calculator

Gebruik de functie die je hierboven hebt gemaakt voor de volgende berekeningen:
    Toon het antwoord van 2 + 4 in het element met de id="plus"
    Toon het antwoord van 21 * 20 in het element met de id="keer"
    Toon het antwoord van 15 - 32 in het element met de id="min"
    Toon het antwoord van 1024 / 8 in het element met de id="delen"
    Toon het antwoord van 3 ^ 8 in het element met de id="macht"
*/

