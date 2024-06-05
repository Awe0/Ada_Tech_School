function guess(){
    let guessArray = [];
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(e){
            const idElement = e.currentTarget.id;
            guessArray.push(idElement);
            if (guessArray.length === 4) {
                displayGuess(guessArray);
                const checkedArray = checkResult(guessArray);
                const result = countResult(checkedArray)
                displayResult(result)
                guessArray = []
            }
        })
    }
}

function createButton(){
    for (const i in colorList) {
        const colorButton = document.createElement("button");
        divButton.appendChild(colorButton);
        colorButton.setAttribute("id", colorList[i]);
        colorButton.innerText = colorList[i];
        buttonArray.push(colorButton);
    }
}

function displayGuess(guessArray){
    const liGuessing = document.createElement("li");
    divGuess.appendChild(liGuessing);
    liGuessing.innerText = guessArray;
}

function checkResult(guessArray){
    let checkArray = [0,0,0,0]
    for (j = 0; j < guessArray.length; j++) {
        for (i = 0; i < winArray.length; i++) {;
            if (guessArray[j] === winArray[i]) {
                if (j === i) {
                    checkArray[i] = goodAwnser
                    break
                }
                else if(checkArray[i] === notPresent && !(guessArray[j] === winArray[j]))
                {
                    checkArray[i] = presentButNotHere
                }
            }
        }
    }
    return checkArray
}

function countResult(checkedArray){
    let numberOfOne = 0;
    let numberOfTwo = 0;
    const checkedResult = [numberOfOne, numberOfTwo];
    for (i = 0; i < checkedArray.length; i++) {
        if (i === presentButNotHere) {
            numberOfOne++;
        }
        else if (i === goodAwnser){
            numberOfTwo++;
        }
    }
    return checkedResult;
}

function displayResult(result){
    divResult.innerHTML = result
}

window.onload = () => {
    createButton();
    guess();
}