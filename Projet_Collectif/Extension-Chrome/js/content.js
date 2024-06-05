//COORDONNEES NAVIGATEUR
function gps() {
    navigator.geolocation.getCurrentPosition(stockPosition);
}

function stockPosition(position) {
    const coordArr = [position.coords.latitude, position.coords.longitude];
    getSun(coordArr); // Appel de getSun une fois que les coordonnées sont disponibles
};

function refreshTime() {
    const tzid2 = localStorage.getItem("tzid")
    const dateString = new Date().toLocaleString("fr-FR", {timeZone: tzid2});
    const getDay = new Date().getDay()
    const formattedString = dateString.replace(", ", " - ");
    const formattedTime = formattedString.slice(10, 19);
    const formattedDate = switchDay[getDay]+" "+day+" "+switchMonth[month]+" "+year
    timeDisplay.innerHTML = formattedTime;
    dateDisplay.innerHTML = formattedDate;
    sunAndMoonPosition()
};

function getImgMoon(moonPhase) {
    const moonImage = document.getElementById("moon-image");
    if (moonPhase in moonPhases) {
        moonImage.src = "../img/" + moonPhases[moonPhase];
    } else { 
        moonImage.src = "../img/new_moon.svg";
    }
    balisePhase.innerHTML = englishToFrench[moonPhase]
};

function sunAndMoonPosition(){
    if (currentHour >= 6 && currentHour < 10) {
        const positionY = '50%';
        moonElement.remove()
    } else if (currentHour >= 11 && currentHour < 16) {
        const positionY = '20%';
        moonElement.remove()
    } else if (currentHour >= 16 && currentHour < 21) {
        const positionY = '40%';
        moonElement.remove()
    } else if (currentHour >=21 && currentHour < 25){
        const positionY = '30%';
        sunElement.remove()
    } else if (currentHour >=0 && currentHour < 6){
        sunElement.remove()
        const positionY = '20%';
    }
    changeBackground()
    sunElement.style.top = positionY;
};

function changeBackground(){
    if (currentHour >= 6 && currentHour < 10) {
        backgroundElement.style.background = '#d2c13a';
    } else if (currentHour >= 11 && currentHour < 16) {
        backgroundElement.style.background = '#48bcff';
    } else if (currentHour >= 16 && currentHour < 21) {
        backgroundElement.style.background = '#d2c13a';
    } else if (currentHour >=21 && currentHour < 25){
        backgroundElement.style.background = '#040427';
    } else if (currentHour >=0 && currentHour < 6){
        backgroundElement.style.background = '#040427';
    }
}

gps();
setInterval(refreshTime, 1000);

