//chaque fonction fait un return
const baliseReturn = document.getElementById("return");
let start, duration, price;
let clientTrips = [
  "Roger 0 5 10",
  "Pongo 3 7 14",
  "Perdita 8 10 8",
  "Anita 16 3 7",
  "Leïla 15 1 20",
  "Allan 6 8 17"
];
/** Parser   */

//4. récupère tableau clientTrips
function sortTrips(clientTrips) {
  let singleClientTrip;
  let travels = [];
  //5. push obj reçu l.22 ds le tableau travels l.23
  //.slice découpe chaîne de caractères et les envoies unes par unes dans createTripObject
  for (i = 0; i < clientTrips.length; i++) {
    clientTrips[i].slice(-1);
    singleClientTrip = clientTrips[i];
    let travel = createTripObject(singleClientTrip);
    travels.push(travel);
  }
  return travels;
}

//1. décompose une chaîne de caractères (split)
function createTripObject(singleClientTrip) {
  const tripInfo = singleClientTrip.split(" ");
  parsing(tripInfo);
  //2. crée un objet avec chaque élément décomposé et rangés dans les attributs
  object = {
    client: tripInfo[0],
    start: start,
    duration: duration,
    price: price,
  };
  //3. return l'objet dans la fonction l.14
  baliseReturn.innerHTML += tripInfo + "<br>";
  return object;
}

//1.1 convertit les string en nombre entier
function parsing(tripInfo) {
  start = parseInt(tripInfo[1]);
  duration = parseInt(tripInfo[2]);
  price = parseInt(tripInfo[3]);
}

// 6. prix rangés dans l'ordre décroissants + somme totale
function getTripsPrice(travels) {
  let totalPrice = 0;
  let priceNumber = 0;
  travels.sort((a, b) => b.price - a.price);
  for (i = 0; i < travels.length; i++) {
    priceNumber = travels[i].price;
    totalPrice += priceNumber;
  }
}

//7. calcul de l'heure d'arrivée, comparaison de celle-ci avec l'heure de départ du prochain trip
function checkCompatibility(tripA, tripB) {
  if (tripA < tripB) {
    return true;
  } else if (tripA > tripB) {
    return false;
  } else {
    return false;
  }
}
// Recherche les compatibilitées et les stocks dans un tableau [allArray]
function findCompabilities(travelsParsed) {
  let allArray = [];
  // Première boucle calculant les arrivées
  for (j = 0; j < travelsParsed.length; j++) {
    let arriveA = travelsParsed[j].start + travelsParsed[j].duration;
    let travelA = travelsParsed[j];
    //Deuxieme boucle récupère les départs et les compares avec les arrivées
    for (i = 0; i < travelsParsed.length; i++) {
      let startB = travelsParsed[i].start;
      let travelB = travelsParsed[i];
      let result = checkCompatibility(arriveA, startB);
      if  (result == true) {
        let singleArray = [];
        singleArray.push(travelA, travelB)
        allArray.push(singleArray);
      }
    }
  }
  return allArray;
}

function findBestPrice(allArray){
  let dataPrices = []
  let dataClientA = []
  let dataClientB = []
  let dataStartA = []
  let dataStartB = []
  let dataArrivalA = []
  let dataArrivalB = []
  for(i=0;i<allArray.length;i++){
    let prices = allArray[i][0].price+allArray[i][1].price
    let clientA = allArray[i][0].client
    let clientB = allArray[i][1].client
    let startA = allArray[i][0].start
    let startB = allArray[i][1].start
    let arrivalA = allArray[i][0].start+allArray[i][0].duration
    let arrivalB = allArray[i][1].start+allArray[i][1].duration
    dataPrices.push(prices)
    dataClientA.push(clientA)
    dataClientB.push(clientB)
    dataStartA.push(startA)
    dataStartB.push(startB)
    dataArrivalA.push(arrivalA)
    dataArrivalB.push(arrivalB)
  }
    const mostProfitable = Math.max(...dataPrices)
    for(j=0;j<dataPrices.length;j++){
      if(dataPrices[j] === mostProfitable){
        return baliseReturn.innerHTML += "<br/>"+dataClientA[j]+" départ "+dataStartA[j]+ "h, arrivé "+dataArrivalA[j]+"h et<br/>"+dataClientB[j]+" départ "+dataStartB[j]+ "h, arrivé "+dataArrivalB[j]+"h <br/>pour un prix total de "+dataPrices[j]+"€ est <br/>le voyage le plus rentable pour la société !";
      }
      else{
        return console.log("Error : Aucun prix n'est enregistré");
      }
    }
}

let travelsParsed = sortTrips(clientTrips);
// console.log(travelsParsed);
getTripsPrice(travelsParsed);
let allArray = findCompabilities(travelsParsed);
console.log(allArray);
findBestPrice(allArray)

