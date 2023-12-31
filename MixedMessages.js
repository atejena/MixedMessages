let age = 19;
let sex = "M";
let zip = 90210;

const ageBase = [
    "10-25:Every year is a new chapter filled with unique stories. Embrace yours.",
    "20-35:Age is about the life in your years, not just the years in your life.",
    "10-65:Let your age be a journey of wisdom and joy, not just a number.",
    "19-30:Youth is the time for dreams, age is the time for making them real.",
    "15-65:Each age has its own poetry; find the rhyme in yours.",
    "66-75:Growing older is mandatory, growing up is optional. Stay young at heart.",
    "30-85:Your age is a reflection of your journey. Be proud of it.",
    "35-75:Life's beauty doesn't fade with age. It evolves.",
    "19-105:Age brings wisdom, courage, and stories to tell. Share yours.",
    "12-32:Embrace each year as a new opportunity to be remarkable."
];
const sexBase = [
    "M:Embrace your true self and let your spirit soar.",
    "F:Your identity is your art; paint it in bright colors.",
    "M:Gender is a spectrum of beauty. Celebrate where you are on it.",
    "F:In the diversity of gender lies the strength of humanity.",
    "M:Be proud of who you are, and let the world see your light.",
    "F:Your gender is an important part of your story. Tell it boldly.",
    "M:Stand tall and unapologetic in your unique identity.",
    "F:Let your gender be a source of strength, not limitation.",
    "M:Celebrate the uniqueness that you bring to the world.",
    "F:Your identity is a treasure. Cherish and honor it."
];
const zipBase = [
    "Every place has its magic. Discover the magic of yours.",
    "Your location is a canvas. Paint it with your experiences.",
    "From the smallest town to the biggest city, every place has its heart.",
    "Let the spirit of your community inspire and uplift you.",
    "Find the hidden gems in your locale and treasure them.",
    "Your surroundings are a reflection of diverse histories. Explore them.",
    "Every ZIP code has its own story, including yours.",
    "Let the unique vibe of your area energize your soul.",
    "Embrace the local culture and add your own chapter to it.",
    "Your location is more than a place; it's a part of your journey."
];

//Message Splitting Variables

// Age based messages generator
function ageSec (ageVar) {
    const randMes = Math.floor(Math.random() * ageBase.length);
    const splitMes = ageBase[randMes].split(':');
    const ageRange = splitMes[0].split('-');
    let ageMesOut = "";

    if(ageVar >= ageRange[0] && ageVar <= ageRange[1]){
        ageMesOut = splitMes[1];
    } else {
        ageMesOut = "Try Again"
    };

    return ageMesOut
}

//console.log(ageSec(27));

//Gender based messages generator
function genderSec (genVar) {
    const randMes = Math.floor(Math.random() * sexBase.length);
    const splitGen = sexBase[randMes].split(':');
    let genMesOut = "";

    if (splitGen[0] === genVar) {
        genMesOut = splitGen[1]
    } else {
        genMesOut = "Try again"
    }

    return genMesOut + ":" + splitGen[0] + "-" + genVar
}

//console.log(genderSec("M"));

//Zip Code Random Message Generator - Does not take input
function zipSec () {
    const randMes = Math.floor(Math.random() * zipBase.length);
    return zipBase[randMes]
}

//console.log(zipSec())

//Random Message Type Selector
const randMesType = Math.floor(Math.random() * 3);

const finalMessageOutput = (numVar) => {
    switch (numVar){
        case 0:
            return ageSec(age);
        break;
        case 1:
            return genderSec(sex);
        break;
        default:
            return zipSec();
    }
}

const inspoMess = finalMessageOutput(randMesType)

//console.log(inspoMess)