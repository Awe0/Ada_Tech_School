const toDaySun = new Date();
const year = toDaySun.getUTCFullYear();
const month = toDaySun.getUTCMonth() + 1;
const day = toDaySun.getUTCDate();
const fullDateForSun = year + "-" + month + "-" + day;
// const currentHour = toDaySun.getHours();
const currentHour = 11 // Variable TEST
const balisePhase = document.getElementById("phase");
const baliseSunset = document.getElementById("sunset");
const baliseSunrise = document.getElementById("sunrise");
const timeDisplay = document.getElementById("time");
const dateDisplay = document.getElementById("date");
const timeZoneSelect = document.getElementById("timeZone_select")
const sunElement = document.querySelector('.sun');
const moonElement = document.querySelector('.moon');
const backgroundElement = document.querySelector('.wrapper');
let tzid = "Europe/Paris"

const moonPhases = {
    'New Moon' : 'new_moon.svg',
    'Waxing Crescent' : 'waxing_crescent.svg',
    'First Quarter' : 'first_quarter.svg',
    'Waxing Gibbous' : 'waxing_gibbous.svg',
    'Full Moon' : 'full_moon.svg',
    'Waning Gibbous' : 'waning_gibbous.svg',
    'Last Quarter' : 'last_quarter.svg',
    'Waning Crescent' : 'waning_crescent.svg',
    'Dark Moon' : 'waning_crescent.svg'
};

const englishToFrench = {
    "New Moon" : "Nouvelle lune",
    "Waxing Crescent" : "Premier croissant",
    "First Quarter" : "Premier quartier",
    "Waxing Gibbous" : "Gibbeuse croissante",
    "Full Moon" : "Pleine lune",
    "Waning Gibbous" : "Gibbeuse décroissante",
    "Last Quarter" : "Dernier quartier",
    "Waning Crescent" : "Dernier croissant",
    'Dark Moon' : 'Dernier croissant'
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