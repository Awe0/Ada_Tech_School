function guess(){
    let guessArray = [];
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(e){
            const idElement = e.currentTarget.id;
            guessArray.push(idElement);
            if (guessArray.length === 4) {
                displayGuess(guessArray);
                winCondition(guessArray);
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

function winCondition(guessArray){
    const numberOfEqualsForWin = 4
    let actualEquals = 0
    const occurences = countOcc(guessArray)
    console.log(occurences);
    for (j = 0; j < guessArray.length; j++) {
        for (i = 0; i < guessArray.length; i++) {;
            if(guessArray[j] === winComposition[i]){
                if (occurences === 1) {
                    actualEquals = 1
                }else{
                    actualEquals++
                }
                }else{
            }
        }
    }
    console.log(actualEquals);
}

/*
Compte les occurences d'un tableau
*/
function countOcc(array){
    const occ = new Map();
    for (const n of array) {
        if (occ.has(n)){
            occ.set(n, occ.get(n) +1 )
        } else {
            occ.set(n, 1)
        }
    }
    return occ.values()
}

function comparedOcc(){
    const guessComp = ["blue","blue","pink","orange"]
    const map1 = countOcc(winComposition)
    const map2 = countOcc(guessComp)
    for (const n of map1) {
        if (map2 === n){
            console.log("coucou");
        }
    }
    console.log(map1);
    console.log(map2);
}

// guessButton.addEventListener("click", () => {})

window.onload = () => {
    createButton();
    guess();
    comparedOcc()
}