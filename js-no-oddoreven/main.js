



// To given Number odd or even

let number=parseInt(prompt('enter a positive no'))
if(number<0){
    console.log("no is negative");
}
else if(number===0){
    console.log("enter positive no");
}
else{
    if(number%2==0){
        console.log("even");
    }
    else{


        console.log("odd");
    }
}