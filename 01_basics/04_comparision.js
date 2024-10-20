console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true

/* The reason is that an euality check == and comparisions > < >= <= work differently.
 Comparisions convert null to a number, treating it as 0. 
 That's why null >= 0 is true and null > 0 is false. */

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined < 0);// true

// Mostly we avoid this type of unprecedented comparision.

// ===

console.log("5" === 5); // false
