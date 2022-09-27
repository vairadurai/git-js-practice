





let number=parseInt(prompt("give an value")),
first_remainder=number%10,
second_remainder=number%100;


function suffix(){
    if(first_remainder==1 && second_remainder!==11){
        console.log(number+"st");
    }
   else if(first_remainder==1 && second_remainder!==11){
        console.log(number+"nt");
    }
   else if(first_remainder==1 && second_remainder!==11){
        console.log(number+"rd");
    }
    else{
        console.log(number+"th");
    }
}
suffix()





