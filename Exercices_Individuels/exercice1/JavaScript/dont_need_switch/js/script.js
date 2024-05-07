function askName(){
    let prenom = prompt("Quel est votre prénom ?");
    let bonjour = "Bonjour " + prenom + " !";
    return document.body.innerHTML +=  `<h1>${bonjour}</h1>`
}
function askBirthYear(){
    let annee = prompt("Quelle est votre année de naissance ? (Exemple : 1983)")
    let calculAge = 2024 - annee
    let mois = prompt("Quel mois êtes vous nés ? (Exemple : 01, 02, 03, ...)")
    mois = mois - 1
    let nomMois = ["de janvier","de février","de mars","d'avril","de mai","de juin","de juillet","d'août","de septembre","d'octobre","de novembre","de décembre"]
    let affichageAge = "Vous êtes nés au mois " + nomMois[mois] + " et vous avez " + calculAge + " ans !"
    return document.body.innerHTML += `<h3>${affichageAge}</h3>`
}

askName()
askBirthYear()