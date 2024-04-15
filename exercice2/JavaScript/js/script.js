/**
 * Fonction qui permet de lancer le jeu
 */
function playGame(){
    const baliseInstructions = document.getElementById("instructions")
    const baliseNumberP1 = document.getElementById("givenNumberP1");
    const baliseNumberP2 = document.getElementById("givenNumberP2");
    const baliseMysteryNumber = document.getElementById("mysteryNumber");
    const validButton = document.getElementById("valid");
    const reloadButton = document.getElementById("reload");
    let tryNumber = 0
    let turn = 0
    
    baliseNumberP2.disabled = true

    reloadButton.addEventListener("click", () => {
        window.location.reload()
    })

    validButton.addEventListener("click", () => {
        baliseMysteryNumber.disabled = true
        const mysteryNumber = baliseMysteryNumber.value
        tryNumber ++
        turn ++

        ruleVerify(givenNumberP1, mysteryNumber)
        displayTry(tryNumber)
        gameTurn(baliseNumberP1, baliseNumberP2, mysteryNumber, turn)
    })
    document.addEventListener("keypress", (e) => {
        if (e.keyCode == 13){
            validButton.click()
        }
    })
}

/**
 * Cette fonction compare le nombre recu avec le nombre mystere
 * et vérifie s'ils respectent la condition de 1 à 50
 * @param {number} givenNumber : nombre choisi par le joueur 2
 * @param {number} mysteryNumber : nombre choisi par le joueur 1
 */
function searchMysteryNumber(givenNumber, mysteryNumber, player){
    if(givenNumber < mysteryNumber){
        displayResult("votre nombre est trop petit.", player)
    }
    else if (givenNumber > mysteryNumber){
        displayResult("votre nombre est trop grand.", player)
    }
    else {
        displayResult("Bravo !", player)
    }
}

/**
 * Cette fonction affiche le resultat
 * @param {string} resultGame : texte envoyé par la fonction searchMysteryNumber
 */
function displayResult(resultGame, player){
    if(player == 0){
    const resultP1 = document.getElementById("resultP1")
    resultP1.innerText = "Joueur 1, " + resultGame
    }
    else{
    const resultP2 = document.getElementById("resultP2")
    resultP2.innerText = "Joueur 2, " + resultGame
    }
}

/**
 * Cette fonction affiche le nombre de tentative
 * @param {number} tryNumber 
 */
function displayTry(tryNumber){
    const baliseTry = document.getElementById("try")
    baliseTry.innerText = "Tentative n°" + tryNumber
}

/**
 * Vérifie si les deux nombres respect la condition de 1 à 50
 * @param {number} givenNumber : nombre choisi l'un des joueur
 * @param {number} mysteryNumber : nombre choisi par le joueur 1
 */
function ruleVerify (givenNumber, mysteryNumber){
    if (givenNumber < 1 || mysteryNumber < 1){
        alert("Veuillez respecter les régles ! Un nombre entre 1 et 50")
    }
    else if (givenNumber > 50 || mysteryNumber > 50){
        alert("Veuillez respecter les régles ! Un nombre entre 1 et 50")
    }
    else{
    }
}

function gameTurn (baliseNumberP1, baliseNumberP2, mysteryNumber, turn){
    for (let i = 0; i < turn; i++){
        if (i%2 == 0){
            baliseNumberP1.disabled = true
            baliseNumberP2.disabled = false
            searchMysteryNumber(baliseNumberP1.value, mysteryNumber, i%2)
        }
        else {
            baliseNumberP2.disabled = true
            baliseNumberP1.disabled = false
            searchMysteryNumber(baliseNumberP2.value, mysteryNumber, i%2)
        }
    }

}