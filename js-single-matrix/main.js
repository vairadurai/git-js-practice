



// single dimensional matrix


let a=[]; b=[]; c=[];

let n;

n=parseInt(prompt("give matrix scale"));
for(let i=0; i<n; i++){
    a[i]=parseInt(prompt("give 1st row value"));
}
for(let i=0; i<n; i++){
    b[i]=parseInt(prompt("give 2nd row value"));
}
for(let i=0; i<n; i++){
   c[i]=a[i]+b[i];
   console.log(c[i]);

}
console.log(c);
