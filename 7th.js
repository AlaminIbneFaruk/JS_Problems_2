// factorial of n
let n=prompt("Enter the number to find factorial:");
let fact=1;
for (let i = 0; i < n; i++) {
    fact=fact*(i+1);    
}
console.log("Factorial of "+n+" is "+fact);