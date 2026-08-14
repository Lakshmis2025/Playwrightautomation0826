//Get the sum of the first 100 numbers

let sum = 0;
for (let i = 1; i <=100; i++)
{
    sum+=i;
}
console.log(sum);

/*A for loop is a programming statement used to repeat a block of code multiple times.
It repeats the code while the condition is true.

i = 1 - intialization - it is executed only once at the beginning of the loop.
i <=100 -condition - it is checked before each iteration of the loop. 
sum = sum + i statement executes the statement in the loop body.
console.log(sum) execute the code.
i++ - increment increase the i by 1*/

//Reverse the number - 3982 - output should be 2893

let number = 3982;
let reversednum = 0;
while(number > 0){
    let remainder = number % 10;
    reversednum = (reversednum * 10) + remainder;
    number = Math.floor(number/10);
}
console.log(reversednum);

/*while loop is a programming statement used to repeat a block of code multiple times.
It repeats the code while the condition is true.

number = 3982 - initialization - it is executed only once at the beginning of the loop.
reversednum = 0 - initialization - this variable will build and store the reversed number.
number > 0 - condition - keep iterating the code while the number is greater than 0.
3982>0, 398>0,39>0,3>0,
remainder = number modulo 10 - gives the last digit of the number.
reversednum = (reversednum*10) + remainder 
math.floor(number/10) - removes the last digit from the number.*/



//Reverse the string - javascript - output should be tpircsavaj

let word = "javascript";
let reversedword = word.split("").reverse().join("");
console.log(reversedword);

/*word.split("").reverse().join("") - this code ...

word.split("") - splits the string into an array of characters.
.reverse() - reverses the order of the elements in the array.
.join("") - joins the elements of the array back into a string.*/
















/*let number = 3982;

let reversed = Number(
    number.toString().split("").reverse().join("")
);

console.log(reversed);*/

/*let str = "javascript";
let reversedstr = "";
for (let i = str.length - 1; i >-1; i--){
    reversedstr += str[i];}*/









