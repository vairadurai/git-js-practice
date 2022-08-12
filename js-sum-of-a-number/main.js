


//sum of a number

let n = parseInt(prompt("give a value"));
let sum, rem;
sum = 0;
while (n > 0) {
    n = parseInt(n);
    rem = n % 10;
    sum += rem;
    n = n / 10;

}
console.log(sum);

