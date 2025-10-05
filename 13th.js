// Reverse a string
let str =prompt("Enter a string: ");
let revStr="";
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
}
console.log("Reversed string is: "+revStr);