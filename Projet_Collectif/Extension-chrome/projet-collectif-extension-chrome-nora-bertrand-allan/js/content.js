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
}

gps();
setInterval(refreshTime, 1000);

