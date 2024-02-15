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
    else if (givenNumber > mysteryNumber){
        displayResult("Trop grand !")
    }
    else {
        displayResult("Trop petit  !")
    }
}

function displayResult(resultGame){
    console.log(resultGame);
    let result = document.getElementById("result")
    console.log(result);
    result.innerText = resultGame
}
