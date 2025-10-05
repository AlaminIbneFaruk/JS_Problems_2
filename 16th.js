// Find character frequency in a string
// Example: "banana" → a = 3, n = 2, b = 1
let str = prompt("Enter a string:").toLocaleLowerCase();
let charFreq=prompt("Enter a character to find its frequency:").toLocaleLowerCase();
let count = 0;
for (let i=0;i<=str.length;i++){
    if(str[i]===charFreq){
        count++;
    }
}
console.log("Frequency of '" + charFreq + "': " + count);