function askName(){
    let prenom = prompt("Quel est votre prénom ?");
    let bonjour = "Bonjour " + prenom + " !";
    return document.body.innerHTML +=  `<h1>${bonjour}</h1>`
}
function askBirthYear(){
    let annee = prompt("Quelle est votre année de naissance ? (Exemple : 1983)")
    let calculAge = 2024 - annee
    let mois = prompt("Quel mois êtes vous nés ? (Exemple : 01, 02, 03, ...)")
    switch(mois){
        case '01':
            mois = "de janvier"
            break;
        case '02':
            mois = "de février"
            break;
        case '03':
            mois = "de mars"
            break;
        case '04':
            mois = "d'avril"
            break;
        case '05':
            mois = "de mai"
            break;
        case '06':
            mois = "de juin"
            break;
        case '07':
            mois = "de juillet"
            break;
        case '08':
            mois = "d'août"
            break;
        case '09':
            mois = "de septembre"
            break;
        case '10':
            mois = "d'octobre"
            break;
        case '11':
            mois = "de novembre"
            break;
        case '12':
            mois = "de décembre"
            break;
        default:
    }
    let affichageAge = "Vous êtes nés au mois " + mois + " et vous avez " + calculAge + " ans !"
    return document.body.innerHTML += `<h3>${affichageAge}</h3>`
}

askName()
askBirthYear()