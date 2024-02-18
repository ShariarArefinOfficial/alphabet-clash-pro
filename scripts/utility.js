console.log('connected');

function hideElementById(elementID){

    const element=document.getElementById(elementID);
    element.classList.add('hidden');
}
function showElementById(elementID){

    const element=document.getElementById(elementID);
    element.classList.remove('hidden');
}

function setKeyBoardBackgroundColorById(elementID){
    const keyboardId=document.getElementById(elementID);
    keyboardId.classList.add('bg-orange-400');
}
function removeKeyBoardBackgroundColorById(elementID){
    const keyboardId=document.getElementById(elementID);
    keyboardId.classList.remove('bg-orange-400');
}

function getArandomAlphabet(){
    //Alphabets Array
    const AlphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets=AlphabetString.split("");

    //Get a random Index between 0-51

    const generateRandomIndex=Math.random()*25;
    const getRandomIndex=Math.round(generateRandomIndex);

    //generate alphabet
    const alphabet=alphabets[getRandomIndex];


    //get Alphabet
    return alphabet;



}

