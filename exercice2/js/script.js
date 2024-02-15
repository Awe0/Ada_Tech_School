function playGame(){
    let baliseNumber = document.getElementById("givenNumber");
    console.log(givenNumber);
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", () => {
        let givenNumber = baliseNumber.value
        searchMysteryNumber(givenNumber)
    })
}

function searchMysteryNumber(givenNumber){
    let mysteryNumber = 22
    console.log(givenNumber);
    if(givenNumber == mysteryNumber){
        console.log("Bravo");
        displayResult("Bravo !")       
    }
}

function displayResult(resultGame){
    let result = document.getElementById("result")
    result = resultGame
}
