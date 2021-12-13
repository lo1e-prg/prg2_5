


function showPriceOf(product) {
    switch (product) {
        case "Orange":
            console.log("Oranges are $0.59 a pound.");
            break;

        case "Apple":
            console.log("Apples are $0.32 a pound.");
            break;

        case "Mango":
            console.log("Mangoes are 2 for the price of 1");
        case "Papaya":
            console.log("Mangoes and papayas are $2.79 a pound.");
            break;

        default:
            console.log("Sorry, we are out of " + product + ".");
    }

    console.log("Is there anything else you'd like?");
}


function studyUntilPass() {
    let score = 0;

    while(score < 6) {
        if( alarm.rings() ) {
            break;
        }

        score = student.makeTest();
    }

    console.log("Your result is a: " + score);
}


function makeAssignments(assignments) {
    
    for(let index = 0; index < assignments.length; index++) {

        if( clock.timeLeft() < 5) {
            break;
        }

        student.make(assignments[index]);

    }

}