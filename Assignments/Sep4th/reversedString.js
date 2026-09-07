let string = "A text inside quotes";

let characters = string.split("");
console.log(characters);

let reversedCharacters = characters.reverse();
console.log(reversedCharacters);

let reversedString = reversedCharacters.join("");
console.log(reversedString);

console.log(`"${reversedString}"`);

/*general syntax:
let reversedString = originalString.split("").reverse().join("");
const reversedString = originalString.split("").reverse().join("");*/

//34%1@ab 
let Str = "34%1@ab"
let reversedStr = Str.split("").reverse().join("");
console.log(reversedStr);
