// Ask user to enter age, sex (M or F), marital status (Y or N) and then using following rules print their place of service. if employee is female, then she will work only in urban areas. if employee is a male and age is in between 20 to 40 then he may work in anywhere if employee is male and age is in between 40 to 60 then he will work in urban areas only. And any other input of age should print "ERROR".


let a,b,c;
a=prompt("male or female");
b=parseInt(prompt("give an age"));
c=prompt("marrage status");

if(a=="female"){
    console.log("she will work only in urban areas");
}
else if(a=="male"){
    if (b>=20 && b<40){
        console.log("work in anyware");
    }else if(b>=40 && b<=60){
        console.log("work urban area only");
    }
else{
    console.log("ERROR");
}
}



