let n = 0
let m = 100
maximum = Math.max(n,m)
minimum = Math.min(n,m)
first = (Math.round(Math.random()*(maximum-minimum))+minimum)
second = first % 2 
ost = 1 - second
first = first - ost
first = Math.abs(first)
console.log(first)