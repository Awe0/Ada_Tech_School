/**
 * Fonction qui permet de lancer le jeu
 */
function playGame(){
    let baliseNumber = document.getElementById("givenNumber");
    let baliseMysteryNumber = document.getElementById("mysteryNumber");
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", () => {
        let mysteryNumber = baliseMysteryNumber.value
        let givenNumber = baliseNumber.value
        console.log(mysteryNumber);
        console.log(givenNumber);
        searchMysteryNumber(givenNumber, mysteryNumber)
    })
}

/**
 * Cette fonction compare le nombre recu avec le nombre mystere
 * @param {number} givenNumber : nombre choisi par le joueur 2
 * @param {number} mysteryNumber : nombre choisi par le joueur 1
 */
function searchMysteryNumber(givenNumber, mysteryNumber){
    if(givenNumber == mysteryNumber){
        displayResult("Bravo !")       
    }
    else if (givenNumber > mysteryNumber){
        displayResult("Trop grand !")
    }
    else {
        displayResult("Trop petit  !")
    }
}

/**
 * Cette fonction affiche le resultat 
 * @param {string} resultGame : texte envoyé par la fonction searchMysteryNumber
 */
function displayResult(resultGame){
    console.log(resultGame);
    let result = document.getElementById("result")
    console.log(result);
    result.innerText = resultGame
}
