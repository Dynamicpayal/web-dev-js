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