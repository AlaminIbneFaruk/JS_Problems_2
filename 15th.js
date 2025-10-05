// Count Spaces in a Sentence
let sentence = prompt("Enter a sentence:");
let spaces = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        spaces++;
    }  
}
console.log("Number of spaces: " + spaces);