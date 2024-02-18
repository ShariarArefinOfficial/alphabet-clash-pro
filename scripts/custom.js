console.log('connected');


//Key board
function keyboardButtonPress(event){

    const playerPressed=event.key;

    //get expected to press
    const currentAlphabet=document.getElementById('current-alphabet').innerText.toLowerCase();

    //Check keyword matched or not
    if(playerPressed===currentAlphabet){
        //Update score
        const currentScoreElement=document.getElementById('score-num');
        const currentScore=parseInt(currentScoreElement.innerText);
        //increase 1 point for one true click
        let score=currentScore+1;
        //show updated score
        currentScoreElement.innerText=score;


        //start a new ROund
        removeKeyBoardBackgroundColorById(currentAlphabet);
        continueGame();
    }
    else{
        //get the life number
        const currentlifeElement=document.getElementById('life-num').innerText;
        let currentLife=parseInt(currentlifeElement);

        //reduce the life count
        currentLife=currentLife-1;

        //display the updated life count
        document.getElementById('life-num').innerText=currentLife;
    }

}
document.addEventListener('keyup',keyboardButtonPress);



//Continue A game
function continueGame(){


    //Generate a random Alphabet
   const getalphabet= getArandomAlphabet();

    //set randomly generated alphabet on the screen
    const setScreenAlphabet=document.getElementById('current-alphabet');
    setScreenAlphabet.innerText=getalphabet;

    //set Background Color
    setKeyBoardBackgroundColorById(getalphabet);
}




//Hidden Remove and add 
document.getElementById('play-now').addEventListener('click',function(){
   
    //Add Class hidden in home section
    hideElementById('home');
    //Remove Class hidden
    showElementById('playGround');
 
    continueGame();

})

