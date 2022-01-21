let a = 13.890123
let b = 2.891564
let n = 2
a = a % 13
b = b % 2
first = a * 10 ** n;
second = b * 10 ** n;
first = Math.floor(first) 
second = Math.floor(second) 
console.log("a=", first)
console.log("b=", second)
console.log("Числа равны", first == second)
console.log("Число а больше", first > second)
console.log("Числа b больше ", first < second)