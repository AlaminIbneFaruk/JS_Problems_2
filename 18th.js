// Remove vowels from string
let str =prompt("Enter a string: ");
for(let i=0; i<str.length; i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
        str = str.replace(str[i], '');
        i--;
    }
}
console.log(str);
