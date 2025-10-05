// word counter
let str=prompt("Enter a string:");
let count=1;
for (let i=0;i<str.length;i++){
    if (str[i]==" "){
        count++;
    }
}
console.log("Number of words: " + (count));