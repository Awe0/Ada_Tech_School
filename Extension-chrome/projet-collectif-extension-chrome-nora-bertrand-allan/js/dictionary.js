const toDaySun = new Date();
const year = toDaySun.getUTCFullYear();
const month = toDaySun.getUTCMonth() + 1;
const day = toDaySun.getUTCDate();
const fullDateForSun = year + "-" + month + "-" + day;
const balisePhase = document.getElementById("phase");
const baliseSunset = document.getElementById("sunset");
const baliseSunrise = document.getElementById("sunrise");
const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const timeZoneSelect = document.getElementById("timeZone_select")
let tzid = "Europe/Paris"

const englishToFrench = {
"New Moon" : "Nouvelle lune",
"Waxing Crescent" : "Premier croissant",
"First Quarter" : "Premier quartier",
"Waxing Gibbous" : "Gibbeuse croissante",
"Full Moon" : "Pleine lune",
"Waning Gibbous" : "Gibbeuse décroissante",
"Last Quarter" : "Dernier quartier",
"Waning Crescent" : "Dernier croissant"
}

const switchDay = {
    1 : "Lundi",
    2 : "Mardi",
    3 : "Mecredi",
    4 : "Jeudi",
    5 : "Vendredi",
    6 : "Samedi",
    7 : "Dimanche"
}

const switchMonth = {
    1 : "Janvier",
    2 : "Février",
    3 : "Mars",
    4 : "Avril",
    5 : "Mai",
    6 : "Juin",
    7 : "Juillet",
    8 : "Août",
    9 : "Septembre",
    10 : "Octobre",
    11 : "Novembre",
    12 : "Décembre"
}