


// Given number in reverse order

let a = [];
let n = parseInt(prompt("to give 'n' numbert"));
for (i = 0; i < n; i++) {
    a[i] = parseInt(prompt("give a value"));
}

a.sort(function (a, b) { return b - a })
console.log(a);
