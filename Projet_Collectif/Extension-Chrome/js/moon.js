const moonPhases = [
    "new_moon.svg",
    "waxing_crescent.svg",
    "first_quarter.svg",
    "waxing_gibbous.svg",
    "full_moon.svg",
    "waning_gibbous.svg",
    "last_quarter.svg",
    "waning_crescent.svg"
];

let currentPhaseIndex = 0
const moonImage = document.getElementById("moon-image")

function changeMoonPhase() {
    moonImage.src = "../img/" + moonPhases[currentPhaseIndex]
    currentPhaseIndex = (currentPhaseIndex + 1) % moonPhases.length
}

setInterval(changeMoonPhase, 1000)