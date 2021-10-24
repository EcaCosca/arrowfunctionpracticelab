// FUNCTION ONE 
const sum=(num1, num2)=>{
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))


// FUNCTION TWO 
const stringLength=(str)=>{
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)


// FUNCTION THREE
const stringLength2=(str)=>{
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength2("willynilly")


// FUNCTION FOUR
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

const showAlert=(name)=>{    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")