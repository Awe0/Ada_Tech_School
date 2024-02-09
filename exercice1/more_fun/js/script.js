function askName(){
    let prenom = prompt("Quel est votre prénom ?");
    let bonjour = "Bonjour " + prenom + " !";
    return document.body.innerHTML +=  `<h1>${bonjour}</h1>`
}
function askBirthYear(){
    let annee = prompt("Quelle est votre année de naissance ? (Exemple : 1983)")
    let calculAge = 2024 - annee
    let mois = prompt("Quel mois êtes vous né.es ? (Exemple : 01, 02, 03, ...)")
    mois = mois - 1
    let jour = prompt("Pour finir, indiquez le jour. (Exemple : 1, 2, 3, ..., 29, 30, 31)")
    let nomMois = ["de janvier","de février","de mars","d'avril","de mai","de juin","de juillet","d'août","de septembre","d'octobre","de novembre","de décembre"]
    let day = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
    let date = new Date(annee, mois, jour)
    date = date.toDateString()
    date = date.substr(0, 3)
    console.log(date)
    switch(date){
        case'Mon':
        day = day[0]
        break;
        case'Tue':
        day = day[1]
        break;
        case'Wed':
        day = day[2]
        break;
        case'Thu':
        day = day[3]
        break;
        case'Fri':
        day = day[4]
        break;
        case'Sat':
        day = day[5]
        break;
        case'Sun':
        day = day[6]
        break
    }
    let affichageAge = "Vous êtes né.es au mois " + nomMois[mois] + ", souvenez-vous-en, c'était un " + day + " ! Cette année vous fêterez vos " + calculAge + " ans !"
    return document.body.innerHTML += `<h3>${affichageAge}</h3>`
    
}
const date = new Date(1995, 0, 11)
console.log(date.toDateString())

askName()
askBirthYear()