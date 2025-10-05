// counting vowels and consonants
let str = prompt("Enter a string:");
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str.charAt(i) === "a" ||
    str.charAt(i) === "e" ||
    str.charAt(i) === "i" ||
    str.charAt(i) === "o" ||
    str.charAt(i) === "u"
  ) {
    vowels++;
  } else {
    consonants++;
  }
}
console.log("Vowels: " + vowels);
console.log("consonants: " + consonants);
