let score = "55ab"

console.log(typeof score);
console.log(typeof (score)); // string


let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN


// "55" => 55
// "55ab" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// "payal" => true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber); // 45
console.log(typeof stringNumber); // string

// **************************** Operations ****************************

let value = 5
let negValue = -value
console.log(negValue); // -5

// console.log(5+2); // -5
// console.log(7-4); // 7
// console.log(8*5); // 3
// console.log(10/4); // 40
// console.log(2**3); // 8
// console.log(64%2); // 0

let str1 = "hello"
let str2 = " JS"

console.log(str1 + str2); // hello JS

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log( (3 + 4) * 8 % 3); // 2

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let gameCounter = 500
gameCounter++;
console.log(gameCounter); // 501

