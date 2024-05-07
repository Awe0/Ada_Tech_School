const buttonP1 = document.getElementById("bp1")
const valueP1 = document.getElementById("p1")
const buttonP2 = document.getElementById("bp2")
const valueP2 = document.getElementById("p2")
const textSticksLeft = document.getElementById("sitcksleft")
let = sticksNumber = 50

function displaySticksLeft(totalSticksNumber){
    textSticksLeft.innerText = totalSticksNumber + " sticks left !"
}

function removeSticks (sticksToRemove){
    const newTotalSticksNumber = sticksNumber - sticksToRemove
    sticksNumber = newTotalSticksNumber
    return sticksNumber
}

buttonP1.addEventListener("click", () => {
    if (valueP1.value <= 0) {
        alert("MIN 1 !")
    }
    else if (valueP1.value >= 7){
        alert("MAX 6 !")
    }
    else{
        let totalSticksNumber = removeSticks(valueP1.value)
        displaySticksLeft(totalSticksNumber)
    }
})

buttonP2.addEventListener("click", () => {
    if (valueP2.value <= 0) {
        alert("MIN 1 !")
    }
    else if (valueP2.value >= 7){
        alert("MAX 6 !")
    }
    else{
        let totalSticksNumber = removeSticks(valueP2.value)
        displaySticksLeft(totalSticksNumber)
    }
})