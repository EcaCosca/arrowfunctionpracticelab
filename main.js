// FUNCTION ONE 
function sum(num1, num2){
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))

// ARROW FUNCTION ONE 
let arrowSum = (a,b) => {return a + b;}
console.log("the answer is", arrowSum(10,5))




// FUNCTION TWO 
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)

// ARROW FUNCTION TWO 
let arrowStringLength = (str) => console.log(`the length of "${str}" is:`, str.length);
let city = "Riyadh"
arrowStringLength(city);


// FUNCTION THREE
function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")


// ARROW FUNCTION THREE

let arrowStringLength2 = (str) => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
};
arrowStringLength2("sleep");


// FUNCTION FOUR
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")


// ARROW FUNCTION FOUR

let arrowShowAlert = (name) => {
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

arrowShowAlert("you nice");

