// FUNCTION ONE 
let sum = (num1, num2) => num1 + num2;


sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))


// FUNCTION TWO 
let stringLength = (str) => console.log(`the length of "${str}" is:`, str.length);

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)


// FUNCTION THREE
let stringLength2 = (str) => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
};

stringLength2("willynilly")


// FUNCTION FOUR
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

let showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

showAlert("you ball of fluff")