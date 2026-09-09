
/*write Duplicate elements in an array using .filter() and .indexOf()
.filter(): creates a new array containing only the values 
that pass a condition.

let newarray = originalarray.filter((value)=>{
    return condition;});*/

let Numbers = [34,35,36,37,38,39,34,38,37,40];
let evenNumbers = Numbers.filter((number) => {
    return number % 2 === 0
});
console.log("Even Numbers--"+evenNumbers);

let oddNumbers = Numbers.filter((number) => {
    return number % 2 !== 0
});
console.log("Odd Numbers--"+oddNumbers);

let IndexNumber = Numbers.filter((number, Index) => {
    console.log(number, Index);
    return true
});
console.log("Index Number--"+IndexNumber);

/*.indexOf()
can an array method or string method
returns the index position of the first occurence of a value.
array.index(value)*/
First = Numbers.indexOf(38);
console.log("First Index Number--"+First);

/*Duplicate Element;
If a value's first index is different from its current Index, it is a Duplicate.
Numbers.indexOf(number) !== index*/
 let Duplicate = Numbers.filter((number, Index) =>{
    return Numbers.indexOf(number) !== Index;
});
    console.log("Duplicate Numbers--"+Duplicate);

/*Unique Numbers:appear only once
.lastIndexOf():finds the index position of the last occurance of a value.
An array method
array.lastIndexOf(value);
*/
let LastIndex = Numbers.lastIndexOf(38);
console.log("Last Index--"+LastIndex);

let UniqueNumbers = Numbers.filter((number) => {
    return Numbers.lastIndexOf(number) === Numbers.indexOf(number)
});
console.log("Unique Numbers--"+ UniqueNumbers);

/*Distinct Numbers: keeping one copy of every number and 
removing additional numbers;*/
let DistinctNumbers = Numbers.filter((number,Index) =>{
    return Index === Numbers.indexOf(number)});
    console.log("Distinct Numbers--" + DistinctNumbers);


 

