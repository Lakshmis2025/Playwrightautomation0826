let numbers = [2, 5, 4.5, 1, 9, 4, 8, 3, 7, 3, 7];
let largest = numbers[0];
let smallest = numbers[0];

for (let number of numbers){
    if (number>largest){
        largest = number;
       }
    if (number<smallest){
        smallest = number;
    }
}
console.log("Largest Number ", largest);
console.log(smallest);

let nums = [-4, -6, -19, 22, 7, 81, 0, 78];
let largestnum = -Infinity;
let smallestnum = Infinity;
for ( let num of nums){
    if (num>largestnum){
    largestnum = num;
}
    if(num<smallestnum){
    smallestnum = num;
    }
}
console.log(largestnum + " Largest Number");
console.log(smallestnum);

