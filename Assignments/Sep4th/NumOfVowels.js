/*.includes() checks whether a value exists inside a string or an array. 
.push() adds a new value to the end of an array.  
for...of loop goes through each value one at a time.*/

let word = "PlaywrightAutomation";
let vowels = [];
//this creates an empty array named vowels
for ( let letter of word){
    if ("aeiouAEIOU".includes(letter)){
        vowels.push(letter);
    }
}
console.log(vowels);