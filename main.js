// FUNCTION ONE 
// function sum(num1, num2){
//     return num1 + num2
// }
//arrow function
let sum = (num1,num2)=>num1+num2;

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))


// FUNCTION TWO 
// function stringLength(str){
//     console.log(`the length of "${str}" is:`, str.length)
// }
//arrow function
let stringLength =(str)=>console.log(`the length of "${str}" is:`, str.length);

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)


// FUNCTION THREE
// function stringLength(str){
//     let length = str.length
//     console.log(`the length of "${str}" is:`, length)
//     return str.length
// }

//arrow function
let stringLength = (str)=> console.log(`the length of "${str}" is:`, str.length);
stringLength("willynilly")


// FUNCTION FOUR
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// function showAlert(name){    
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
// }

//arrow function
let showAlert = (name)=>alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
showAlert("you ball of fluff")