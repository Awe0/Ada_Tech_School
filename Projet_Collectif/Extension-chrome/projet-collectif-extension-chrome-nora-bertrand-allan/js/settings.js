function refreshAndDisplayTime() {
    const tzid2 = localStorage.getItem("tzid")
    const dateString = new Date().toLocaleString("fr-FR", {timeZone: tzid2});
    const getDay = new Date().getDay()
    const formattedString = dateString.replace(", ", " - ");
    const formattedTime = formattedString.slice(10, 19);
    const formattedDate = switchDay[getDay]+" "+day+" "+switchMonth[month]+" "+year
    timeDisplay.innerHTML = formattedTime;
    dateDisplay.innerHTML = formattedDate;
}

setInterval(refreshAndDisplayTime, 1000);

async function getTimeZoneFromJson(){
    let timeZoneNames = []
    const timeZone = await fetch('./time-zones.json')
    const result = await timeZone.json();
    result.forEach(element => {
        timeZoneNames.push(element.name)
    });
    timeZoneNames.sort();
    return timeZoneNames
}

function addTimeZoneToSelect(){
    const timeZoneArray = getTimeZoneFromJson()
    timeZoneArray.then((result)=>{
        for (i = 0; i < result.length; i++) {
            const opt = document.createElement("option")
            opt.value = result[i];
            opt.innerHTML = result[i];
            console.log(timeZoneSelect);
            timeZoneSelect.appendChild(opt);
        }
    })
}

function getSelectedValue(){
    tzid = localStorage.setItem("tzid",document.getElementById("timeZone_select").value);
}

addTimeZoneToSelect()