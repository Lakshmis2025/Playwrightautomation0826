/*
A Palindrome is a word, number or sentence that reads 
the same forward and backward.
A Palindrome sentence reads the same forward and backward 
when spaces and punctuation, and capital letters are ignored.
*/

let sentence = "Do geese see God?";
/*
.toLowerCase()
Converts uppercase letters to lowercase.

.replace(/[^a-z0-9]/g, "")
Removes everything except lowercase letters and numbers.

Using methods one after another is called method chaining.
*/
let cleanedSentence = sentence
.toLowerCase().replace(/[^a-z0-9]/g,"");
console.log(cleanedSentence);
/*
split the cleanedSentence
.split("")

reverse the cleanedSentence.
.reverse()
join
.join();
*/
let reversedSentence = cleanedSentence
.split("").reverse().join("");
console.log(reversedSentence);
if (cleanedSentence === reversedSentence)
    console.log("Palindrome");
else
    console.log("Not Palindrome");



