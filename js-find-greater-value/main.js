

// which one is greater


let a,b,c;
a=parseInt(prompt("give 1st number"));
b=parseInt(prompt("give 2st number"));
c=parseInt(prompt("give 3st number"));
if (a>b) {
    if (a>c) {
        console.log("a is greater");
    }
    else{
        console.log("c is greater");

    }
}
else{
    if (b>c) {
        console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }
}
