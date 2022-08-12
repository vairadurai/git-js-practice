












//Ascending and Desending order

let a,b,c;
a=parseInt(prompt("1st value"));
b=parseInt(prompt("2nd value"));
c=parseInt(prompt("3rd value"));

if(a>b && a>c){
    if(b>c){
        console.log("ascending-",c,b,a);
        console.log("decending-",a,b,c);
    }
    else{
        console.log("ascending-",b,c,a);
        console.log("decending-",a,b,c);
    }
}


if (b>a && b>c) {
    if(a>c){
        console.log("ascending-",c,a,b);
        console.log("descending-",b,a,c);
    }
    else{
        console.log(a,c,b);
        console.log("descending-",b,c,a);
    }
}


if (c>a && c>b) {
    if (b>a) {
        console.log("ascending-",a,b,c);
        console.log("descending-",c,b,a);
    }
    else{
        console.log("ascending-",b,a,c);
        console.log("descending-",c,a,b);

    }
}

