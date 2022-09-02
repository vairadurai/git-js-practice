let a=[1,28,32,4,5,6,7,8,9],
s=0;
for(let i=0; i<a.length; i++){
    let b=a[i]+s;
    s=b;
}
console.log(s);