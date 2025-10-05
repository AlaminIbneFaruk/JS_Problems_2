// string length without using str.length
let str = prompt("Enter a string:");
let count = 0;

while (str.charAt(count) !== "") {
  console.log(str.charAt(count));
  count++;
}
console.log("Length of the string is: " + count);
