


// PALINDROME

let value=prompt("give a string"),assign;
assign=value;
assign=assign.split("");
assign=assign.reverse();
assign=assign.join("");
if(assign==value){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}

