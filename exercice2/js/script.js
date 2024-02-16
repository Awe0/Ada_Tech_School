/**
 * Fonction qui permet de lancer le jeu
 */
function playGame(){
    let baliseNumber = document.getElementById("givenNumber");
    let baliseMysteryNumber = document.getElementById("mysteryNumber");
    let myButton = document.getElementById("button");
    let reloadButton = document.getElementById("reload");
    let tryNumber = 0

    reloadButton.addEventListener("click", () => {
        window.location.reload()
    })

    myButton.addEventListener("click", () => {
        let mysteryNumber = baliseMysteryNumber.value
        let givenNumber = baliseNumber.value
        tryNumber ++
        ruleVerify(givenNumber, mysteryNumber)
        searchMysteryNumber(givenNumber, mysteryNumber, tryNumber)
        displayTry(tryNumber)
    })
    document.addEventListener("keypress", (e) => {
        if (e.keyCode === 13){
            myButton.click()
        }
    })
}

/**
 * Cette fonction compare le nombre recu avec le nombre mystere
 * et vérifie s'ils respectent la condition de 1 à 50
 * @param {number} givenNumber : nombre choisi par le joueur 2
 * @param {number} mysteryNumber : nombre choisi par le joueur 1
 * @param {number} tryNumber : nombre de tentative du joueur 2
 */
function searchMysteryNumber(givenNumber, mysteryNumber, tryNumber){
    if(givenNumber < mysteryNumber){
        displayResult("Votre nombre est trop petit  !")
    }
    else if (givenNumber > mysteryNumber){
        displayResult("Votre nombre est trop grand !")
    }
    else {
        displayResult("Bravo ! Vous avez trouvez le nombre mystère en " + tryNumber + " tentatives !")
    }
}

/**
 * Cette fonction affiche le resultat
 * @param {string} resultGame : texte envoyé par la fonction searchMysteryNumber
 */
function displayResult(resultGame){
    let result = document.getElementById("result")
    result.innerText = resultGame
}

/**
 * Cette fonction affiche le nombre de tentative
 * @param {number} tryNumber 
 */
function displayTry(tryNumber){
    let baliseTry = document.getElementById("try")
    baliseTry.innerText = "Tentative n°" + tryNumber
}

/**
 * Vérifie si les deux nombres respect la condition de 1 à 50
 * @param {number} givenNumber : nombre choisi par le joueur 2
 * @param {number} mysteryNumber : nombre choisi par le joueur 1
 */
function ruleVerify (givenNumber, mysteryNumber){
    if (givenNumber < 1 || mysteryNumber < 1){
        alert("Veuillez respecter les régles ! Un nombre entre 1 et 50")
        window.location.reload()
    }
    else if (givenNumber > 50 || mysteryNumber > 50){
        alert("Veuillez respecter les régles ! Un nombre entre 1 et 50")
        window.location.reload()
    }
    else{}
}