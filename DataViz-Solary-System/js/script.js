const ulElement = document.querySelector("ul");
const systemeAPI = fetch("https://api.le-systeme-solaire.net/rest/bodies/");
const colorPlanet = [[174,233,255],[30,95,247],[238,200,112],[232,130,28],[201,164,62],[249,235,109],[116,116,213],[246,182,7]];
let listeObjects = [];
let lune;

/**
 * Créer le lien avec l'API et récupère les données.
*/
systemeAPI.then(response => {
    return response.json();
}).then(json => {
    const orbitSpeed = calculOrbitSpeed(json.bodies)
    json.bodies.forEach(element => {
        if (element.isPlanet === true){
            listeObjects.push(element)
            addColorAndOrbitSpeed(listeObjects, orbitSpeed);
            const liElement = document.createElement("li");
            liElement.classList.add("visible");
            liElement.innerText = element.name;
            ulElement.appendChild(liElement);  
        }
        else if (element.id === "lune"){
            lune = element
            lune.colorPlanet = [100,100,100]
            lune.orbitSpeed = 90
        }
    });
})

/**
 * Initialise le canvas
*/
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    createSliders()
}

function createSliders(){
    zoom = createSlider(0,700,0,1);
    zoom.position(windowWidth-300,800);
    zoom.size(200);
    translateX = createSlider(-500,500,0,1);
    translateX.position(windowWidth-600,800)
    translateX.size(200)
    orbitSpeedSlider = createSlider(0,1,1,0.001)
    orbitSpeedSlider.position(windowWidth-900,800)
    orbitSpeedSlider.size(200)    
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
 * Lance le calcul de la vitesse orbital, une fois terminé, créée les planetes
*/
function createPlanet(){
    for (let i = 0; i < listeObjects.length; i++){
        rotateY(millis()/listeObjects[i].orbitSpeed*orbitSpeedSlider.value());
        push();
        sphere(1);
        emissiveMaterial(listeObjects[i].colorPlanet);
        translate(listeObjects[i].aphelion/10000000+120,0);
        sphere(listeObjects[i].equaRadius/5000);
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

function addColorAndOrbitSpeed(listeObjects,orbitSpeed){
    for (i = 0; i < listeObjects.length; i++) {
        listeObjects[i].colorPlanet = colorPlanet[i]
        listeObjects[i].orbitSpeed = orbitSpeed[i]
    }
}

