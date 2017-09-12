/**
 * Here is the guess game!
 */

"use strict";

resetGame();
// Game loop
while(currentStep < maxNumberOfStep){
    let userGuess = getUserGuess("Bitte geben Sie Ihre Zahl!", maxOfGeneratedNumber);
    if(userGuess == generatedNumber){
        feedback("Yeay! Sie haben das Spiel gewonnen!");
        if(confirm("Do you want to play again")){
            resetGame();
        } else {
            break;
        }
    } else {
        // Eger kullanicinin girdigi sayi bilgisayarin tuttugundan kücük ise 
        // "Lütfen sayiyi büyütünüz" Feedback ini verecek
        // Tersi durumda da "Lütfen sayiyi kücültünüz" gösterecek
        // feedback("yaklastin");
        if(userGuess < generatedNumber) {
            feedback("Too Low");
        } else {
            feedback("Too High");
        }
        if(confirm("do you give up")){
            resetGame();
            break;
        }
    }

    currentStep++; // currentStep = currentStep + 1;
}



if(currentStep === 5){
    feedback("Oooh! Leider haben Sie das Spiel verloren!");
    resetGame();
}
