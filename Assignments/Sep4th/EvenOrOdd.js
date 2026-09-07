let num = 99;

if (num % 2 === 0) {
console.log("Even Number");
}
else {
console.log("Odd Number");
}

//if(condition){
//    runs if the condition is true
//}
//else{
//    runs if the condition is false
//}

//for...of loop with an if...else condition

let numbers = [12, 99, 54, 31, 43, 72, 110.21]

for (let number of numbers) {
    if (number % 2 === 0){
        console.log(number + " is an Even number ");
    }
    if (number % 2 === 1){
        console.log(number + " is an Odd number ");
    }
}

let numbrs = [ 293.01, -5, 4.5, 3, 0.1, 0 ]

for (let numbr of numbrs){
    if (Number.isInteger(numbr)){
    console.log(numbr + "is an integer")
}
else if (!Number.isInteger(numbr)){
    console.log(numbr + "is a decimal")
}
}


