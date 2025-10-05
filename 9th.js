// Sum of even nums 1 to n
let n=prompt("Enter a number: ");
let sum =0;
for (let i = 0; i < n; i+=2) {
    sum+=i;
    console.log(i);
}
console.log("Sum of even numbers from 1 to "+n+" is: "+sum);