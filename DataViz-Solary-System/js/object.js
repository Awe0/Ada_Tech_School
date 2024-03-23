let orbitSpeed = [];
let equaRadius = [];
let aphelion = [];
let semiMajorAxis = [];
let sideralOrbit = [];
const colorPlanet = [[174,233,255],[30,95,247],[238,200,112],[232,130,28],[201,164,62],[249,235,109],[116,116,213],[246,182,7],[246,0,0]];

function createObject(){
    let arrObj = []
        for (i = 0; i < orbitSpeed.length; i++) {
            console.log(i);
            object = {
                orbitSpeed:orbitSpeed[i],
                equaRadius:equaRadius[i],
                aphelion: aphelion[i],
                semiMajorAxis: semiMajorAxis[i],
                sideralOrbit: sideralOrbit[i],
                colorPlanet: colorPlanet[i]
            }
            arrObj.push(object)
    }
    return arrObj
}
