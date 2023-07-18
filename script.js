// 💻 Create three arrays of strings, one called "randomBodyParts", one called "randomAdjectives", and one called "randomWords".
// Put at least 10 strings in each

let randomBodyParts = ["head",
"ears",
"nose",
"tail",
"hands",
"feet",
"chest",
"neck",
"back",
"toenails",
"belly button",
"head",
"nose hair"]
let randomAdjectives = ["greasy",
"smelly",
"ugly",
"purple",
"FAT",
"trash",
];
let randomWords = [
    "pig", "armour", "jumper cabel ", "optims primes exost pipe", "bag", "white van" 
];

/*
💻 Write the code to generate the insult here
*/
let bodyPartIndex = Math.floor(Math.random()*randomBodyParts.length)
let adjectiveIndex = Math.floor(Math.random()*randomAdjectives.length)
let wordIndex = Math.floor(Math.random()*randomWords.length)

let bodyPart = randomBodyParts[bodyPartIndex]
let adjective = randomAdjectives[adjectiveIndex]
let word = randomWords[wordIndex]

let insult = "Your " + bodyPart + " is like a " + adjective + " " + word + "!"

// Change "Unwritten Insult" to your insult variable
document.getElementById("insult-spot").innerText = "Unwritten Insult"


