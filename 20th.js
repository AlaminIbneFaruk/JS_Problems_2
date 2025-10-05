// capitalize the first letter of each word in a string
let str=prompt("Enter a string:");
let afterUpper="";
let strArr=str.split(""); 
for (let i=0;i<strArr.length;i++){
    if (strArr[i-1]==" "|| i-1==-1){
        strArr[i]=strArr[i].toLocaleUpperCase();
    }
    afterUpper+=strArr[i];
}
console.log(afterUpper);