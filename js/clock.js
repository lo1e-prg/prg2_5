function drawDigit(idPrefix, digit) {
    switch (digit) {
        case 0:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-3",
                "vbar-1",
                "vbar-2",
                "vbar-3",
                "vbar-4",
            ]);
            break;
        case 1:
            drawCrystals(idPrefix, [
                "vbar-2", 
                "vbar-4"
            ]);
            break;
        case 2:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-2",
                "vbar-3",
            ]);
            break;
        case 3:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-2",
                "vbar-4",
            ]);
            break;
        case 4:
            drawCrystals(idPrefix, [
                "hbar-2", 
                "vbar-1", 
                "vbar-2", 
                "vbar-4"
            ]);
            break;
        case 5:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-1",
                "vbar-4",
            ]);
            break;
        case 6:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-1",
                "vbar-3",
                "vbar-4",
            ]);
            break;
        case 7:
            drawCrystals(idPrefix, ["hbar-1", "vbar-2", "vbar-4"]);
            break;
        case 8:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-1",
                "vbar-2",
                "vbar-3",
                "vbar-4",
            ]);
            break;
        case 9:
            drawCrystals(idPrefix, [
                "hbar-1",
                "hbar-2",
                "hbar-3",
                "vbar-1",
                "vbar-2",
                "vbar-4",
            ]);
            break;
    }
}

function drawDigits(part, number) {
    let digits = digitsOf(number);

    if (digits.length > 1) {
        drawDigit(part + "-1", digits[0]);
        drawDigit(part + "-2", digits[1]);
    } else {
        drawDigit(part + "-2", digits[0]);
    }
}

function drawCrystals(idPrefix, bars) {
    for (let index = 0; index < bars.length; index++) {
        let bar = bars[index];
        drawCrystal(idPrefix, bar);
    }
}

function drawCrystal(idPrefix, bar) {
    let id = idPrefix + "-" + bar;
    document.getElementById(id).style.display = "block";
}

function startClock() {
    drawDigit("hour-1", 0);
    drawDigit("hour-2", 0);
    drawDigit("minute-1", 0);
    drawDigit("minute-2", 0);
    drawDigit("second-1", 0);
    drawDigit("second-2", 0);

    setInterval(drawClock, 1000);
}

function resetDigits() {
    let bars = document.getElementById("clock").getElementsByClassName("bar");
    for (let index = 0; index < bars.length; index++) {
        bars[index].style.display = "none";
    }
}

function drawClock() {
    let now = new Date();

    resetDigits();

    drawDigits('hour', now.getHours());
    drawDigits('minute', now.getMinutes());
    drawDigits('second', now.getSeconds());
}

/**
 *
 * @param {Number} number Any number
 * @returns Array<Number>
 */
function digitsOf(number) {
    return number
        .toString()
        .split("")
        .map((digit) => parseInt(digit));
}

window.addEventListener("load", startClock);
