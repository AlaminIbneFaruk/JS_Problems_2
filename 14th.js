// Palindrome checker
let str =prompt("Enter a string: ");
let revStr="";
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
}
if(str===revStr){
    console.log(str+" is a palindrome");
}else{
    console.log(str+" is not a palindrome");
}