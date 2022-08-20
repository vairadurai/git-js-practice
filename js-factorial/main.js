



//Factorial

let a, b, n;
let s = 1;
n = parseInt(prompt("give a value"));
for (i = 1; i <= n; i++) {

    a = i * s;
    s = a;

}
console.log(a);
