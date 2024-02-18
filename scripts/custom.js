console.log('connected');


//Key board
function keyboardButtonPress(event){

    const playerPressed=event.key;
 
    //get expected to press
    const currentAlphabet=document.getElementById('current-alphabet').innerText.toLowerCase();

//Stop the game if pressed escape
if(playerPressed==='Escape'){
    gameOver();
}



    let score;
    //Check keyword matched or not
    if(playerPressed===currentAlphabet){
        //Update score
        const currentScoreElement=document.getElementById('score-num');
        const currentScore=parseInt(currentScoreElement.innerText);
        //increase 1 point for one true click
        score=currentScore+1;
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
        if(currentLife===0){
            gameOver();
            const finalScore=document.getElementById('final-score');
            const scoreValue=parseInt(document.getElementById('score-num').innerText);
            finalScore.innerText=scoreValue;
        }
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
document.getElementById('play-again').addEventListener('click',function(){
   
    //Add Class hidden in home + score section
    hideElementById('home');
    hideElementById('score');


    //Remove Class hidden
    showElementById('playGround');

    //reset score and id
    let lifeReset=document.getElementById('life-num');
    let scoreReset=document.getElementById('score-num');
    lifeReset.innerText=3;
    scoreReset.innerText=0;
 
    continueGame();

})

function gameOver(){
      //Add Class hidden in home section
      hideElementById('playGround');
      //Remove Class hidden
      showElementById('score');

      //get alphabet
      let alphabet=getAlphabetForGameOver('current-alphabet');
      removeKeyBoardBackgroundColorById(alphabet)
}

