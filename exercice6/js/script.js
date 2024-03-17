const inputDate = document.getElementById("date")
const validButton = document.getElementById("validButton")

validButton.addEventListener("click", () => {
console.log(inputDate.value);
})




function isValidDate(dateString){
    
}

const date = new Date()
const month = date.getMonth()
const year = date.getFullYear()
const day = date.getDay()

const fullDate = day + "/" + month + "/" + year

console.log(fullDate)