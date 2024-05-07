const ulElement = document.querySelector("ul");
const systemeAPI = fetch("https://api.le-systeme-solaire.net/rest/bodies/");
const colorPlanet = [[174,233,255],[30,95,247],[238,200,112],[232,130,28],[201,164,62],[249,235,109],[116,116,213],[246,182,7]];
let listObjects = [];

/**
 * Créer le lien avec l'API et récupère les données.
*/
systemeAPI.then(response => {
    return response.json();
}).then(json => {
    const orbitSpeed = calculOrbitSpeed(json.bodies)
    json.bodies.forEach(element => {
        if (element.isPlanet === true){
            listObjects.push(element)
            addColorAndOrbitSpeed(listObjects, orbitSpeed);
        }
    });
    createPlanetList(listObjects)
})

/**
 * Initialise le canvas
*/
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    createSliders()
}

/**
 * Créé les sliders
 */
function createSliders(){
    zoom = createSlider(0,700,0,1);
    zoom.position(windowWidth/4,windowHeight-100);
    zoom.size(200);
    zoom.addClass('slider')
    translateX = createSlider(-500,500,0,1);
    translateX.position(windowWidth/2-100,windowHeight-100);
    translateX.size(200);
    translateX.addClass('slider')
    orbitSpeedSlider = createSlider(0,1,1,0.001);
    orbitSpeedSlider.position(windowWidth/1.6,windowHeight-100);
    orbitSpeedSlider.size(200);  
    orbitSpeedSlider.addClass('slider')
}

/**
 * Affiche l'animation chaque frames
*/
function draw(){
    background(0,0,0,0);
    ambientLight(5, 5, 5); // white light
    pointLight(250, 250, 250, 0, 0, 200);
    noStroke();
    fill(255);
    angleMode(DEGREES);
    translate(-translateX.value(),0,zoom.value());
    rotateX(-20);
    push();
    emissiveMaterial(255, 255, 100);
    rotateY(-millis()/30);
    sphere(70);
    pop();
    createPlanet();
}

/**
 * Créée les planètes les unes après les autres
*/
function createPlanet(){
    for (let i = 0; i < listObjects.length; i++){
        rotateY(millis()/listObjects[i].orbitSpeed*orbitSpeedSlider.value());
        push();
        sphere(1);
        emissiveMaterial(listObjects[i].colorPlanet);
        translate(listObjects[i].aphelion/10000000+120,0);
        sphere(listObjects[i].equaRadius/5000);
        pop();
    }
}

/**
 * Ajuste la taille du sketch en fonction de la taille de la fenêtre
*/
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

/**
 * @param {Array} json Tableau contenant tout les objets de l'API
 * Calcul la vitesse orbital des sphères
*/
function calculOrbitSpeed(json){
    let orbitSpeed = []
    for (let i = 0; i < json.length; i++) {
        if (json[i].isPlanet === true){
            orbitSpeed.push((2*Math.PI*json[i].semimajorAxis/json[i].sideralOrbit)/8640);
        }
    }
    return orbitSpeed
}

/**
 * @param {Array} listObjects Tableau contenant toute les planetes
 * @param {Array} orbitSpeed  Tableau contenant toute les vitesses orbital
 * Ajoute les données 'colorPlanet' et 'orbitSpeed' à la liste des objets
*/
function addColorAndOrbitSpeed(listObjects,orbitSpeed){
    for (i = 0; i < listObjects.length; i++) {
        listObjects[i].colorPlanet = colorPlanet[i]
        listObjects[i].orbitSpeed = orbitSpeed[i]
    }
}

/**
 * @param {Array} listObjects Tableau contenant toute les planetes
 * Range les planetes dans l'ordre croissant de leurs aphelion, 
 * créé la balise <li> ainsi que les boutons
 * AddEventListener pour chaque boutons
 */
function createPlanetList(listObjects){
    let buttonArray= [];
    const copyListObjects = [...listObjects]
    copyListObjects.sort((a, b) => a.aphelion - b.aphelion);
    copyListObjects.forEach(element => {
        const liElement = document.createElement("li");
        const planetButton = document.createElement("button");
        liElement.classList.add("visible");
        planetButton.setAttribute("id",element.id);
        planetButton.innerText = element.name;
        planetButton.classList.add("planet-button");
        ulElement.appendChild(liElement); 
        liElement.appendChild(planetButton);
        buttonArray.push(planetButton)
    })

    for(i=0; i<copyListObjects.length; i++){
        console.log(buttonArray[i])
        buttonArray[i].addEventListener("click",(e)=> {
            const planet = e.target.id;
            displayPlanetInfo(planet, copyListObjects);  
        })
    }    
}

/**
 * @param {String} planet Chaine de caractère représantant le nom des planetes
 * @param {Array} listPlanets Copie du tableau contenant toute les planetes
 * Fonction appelée lors du 'click' et affiche les infos choisis préalablement choisis
 */
function displayPlanetInfo(planet, listPlanets){
    const whiteList = ['name', 'englishName', 'perihelion', 'aphelion', 'inclination', 'density', 'gravity', 'meanRadius', 'sideralOrbit', 'sideralRotation', 'discoveredBy', 'bodyType', 'discoveryDate']
    const divPlanetInfo = document.getElementById("info-planet");
    divPlanetInfo.innerText = "";
    
    listPlanets.forEach(element =>{
        if (element.id === planet){
            for(const [key, value] of Object.entries(element)) {
                for (i=0; i<key.length; i++){
                    if (key === whiteList[i]) {
                        console.log(key)
                        const pElement = document.createElement("p");
                        const titreElement = document.createElement("span");
                        const valueElement = document.createElement("span");
                        divPlanetInfo.classList.remove("invisible");
                        divPlanetInfo.classList.add("visible");
                        titreElement.classList.add("titre")
                        titreElement.innerText = key
                        valueElement.innerText = value
                        pElement.appendChild(titreElement)
                        pElement.appendChild(valueElement)
                        divPlanetInfo.appendChild(pElement);
                    }
                }
                    
            }
        }
    })
    
}



