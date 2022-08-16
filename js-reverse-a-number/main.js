



// Reverse a number

let n,remain;
n=143;
while(n>0){
    n=parseInt(n);
    remain=n%10;
    n=n/10;
    if(remain>0){
        console.log("");
        console.log(remain);
    }
}