// print sum of 1 to n using for / while
let n = prompt("Enter the number untill the total sum is going to happen:");
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);