//Logical Operators
let n=5;

console.log(n>=5 && n<10);
console.log(n>5 && n<10);
console.log(n>=5 || n<10);
console.log(n>5 || n<10);
console.log(!(n<10)) 
console.log(!(n>10)) 


//If else if statements practice:
let x = 'PAKISTAN'
let correctAnswer='Pakistan'

if (x==correctAnswer) {
    console.log('Correct!')
} else if (x=='PAKIST') {
    console.log('Close!')
} else {
    console.log('Wrong')
}


//Neted If Statements:
let country='Pakistan'
let age=10

if (country==='Pakistan') {
    if (age>=18) {
        console.log("Here is your ticket")
    } else {
        console.log('Age restriction')
    }
} else {
    console.log('Invalid country')
}