
// Increment operation using for loop

// let c;
// for(c=1; c<10; c++){
//     console.log(c);
// }
// Decrement operation using for loop

// let d;
// for(d=10; d>0; d--){
//     console.log(d);
// }

// To find 1 to 100 odd numbers

// let a;
// for(a=1; a<100; a++){
//     if(a%2==1){
//         console.log(a);
//     }
// }

// To find 1 to 100 even numbers

// let b;
// for(b=1; b<100; b++){
//     if(b%2==0){
//         console.log(b);
//     }
// }
// To find Area of Circle

// let A,r,X;
// X=3.14;
// r=parseInt(prompt("give radius"));
// A=X*r**2;
// console.log(A);

// To find Area of Triangle

// let A,b,h,a;
// a=1/2;
// b=parseInt(prompt("give base value"));
// h=parseInt(prompt("give height value"));
// A=a*b*h;
// console.log(A);

// to find simple inrest

// let SI,P,N,R;
// p=parseInt(prompt("give p"));
// N=parseInt(prompt("give N"));
// R=parseInt(prompt("give R"));

// SI=p*N*R/100;

// console.log(SI);

// Swap two numbers

// let s,w,p;
// s=1;
// w=2;
// p=s;
// s=w;
// w=p;
// console.log(s,w);


//    Function

// a=4;
// b=4;
// function number(a,b){
//     if(a>b){
//         return a
//     }
//     if (b>a) {
//         return b
//     } else {
//         return undefined
//     }
// }
// let x=number(a,b);
// console.log(x);


// while loop

// i=0;
// while (i<5) {
//     console.log(i);
//     i++
// }

// do while loop

// i=0;
// do{
//     console.log(i);
//     i++
// }
// while(i<5);


// to given num odd or even

// let number=parseInt(prompt('ender a positive no'))
// if(number<0){
//     console.log("no is negative");
// }
// else if(number===0){
//     console.log("ender positive no");
// }
// else{
//     if(number%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }

// let sum,n;
// let a=[];
// n=parseInt(prompt("given number"));
// s=0;
// for(i=0; i<n; i++){
//     a[i]=parseInt(prompt("given value"));

//     sum=a[i]+s;
//     s=sum;
// }
// console.log(a);
// console.log(s);

// for(i=0; i<n; i++){

// }
// 


// let a,b;
// a=parseInt(prompt("give a 1st number"));
// b=parseInt(prompt("give a 2st number"));
// if (a%7==0 ) {
//     console.log("a divisible by 7");
//     if( b%7==0){
//         console.log("b divisible by 7");
//     }
//     else {
//         if (a%7==1 ) {
//             console.log("a is notdivisible by 7");
//             if( b%7==1){
//                 console.log("b is not divisible by 7");
//             }
//     }
//     }
// }

//Ascending and Desending order

// let a,b,c;
// a=parseInt(prompt("1st value"));
// b=parseInt(prompt("2nd value"));
// c=parseInt(prompt("3rd value"));

// if(a>b && a>c){
//     if(b>c){
//         console.log("ascending-",c,b,a);
//         console.log("decending-",a,b,c);
//     }
//     else{
//         console.log("ascending-",b,c,a);
//         console.log("decending-",a,b,c);
//     }
// }


// if (b>a && b>c) {
//     if(a>c){
//         console.log("ascending-",c,a,b);
//         console.log("descending-",b,a,c);
//     }
//     else{
//         console.log(a,c,b);
//         console.log("descending-",b,c,a);
//     }
// }


// if (c>a && c>b) {
//     if (b>a) {
//         console.log("ascending-",a,b,c);
//         console.log("descending-",c,b,a);
//     }
//     else{
//         console.log("ascending-",b,a,c);
//         console.log("descending-",c,a,b);

//     }
// }




// let a=parseInt(prompt("give a value"));
// if(a>=18){
// 	console.log("age is above 18");
// }
// 	else{
// 	if(a>=25){
// 		console.log("age is above 25");

// 		}
// 		else{
// 			console.log("age is below 18");
// 		}
//     }




// function durai() {
// 	let a=document.getElementById("html");
// 	let b=document.getElementById("css");
// 	let c=document.getElementById("java");
// 	if (a.checked==true)
// 		alert("U have selected "+a.value);
// 	else if(b.checked==true)
// 		alert("u have selected"+b.value);
// 	else if(c.checked==true)
// 		alert("u have selected"+c.value);

// }




// Ask user to enter age, sex (M or F), marital status (Y or N) and then using following rules print their place of service. if employee is female, then she will work only in urban areas. if employee is a male and age is in between 20 to 40 then he may work in anywhere if employee is male and age is in between 40 to 60 then he will work in urban areas only. And any other input of age should print "ERROR".


// let a,b,c;
// a=prompt("male or female");
// b=parseInt(prompt("give an age"));
// c=prompt("marrage status");

// if(a=="female"){
//     console.log("she will work only in urban areas");
// }
// else if(a=="male"){
//     if (b>=20 && b<40){
//         console.log("work in anyware");
//     }else if(b>=40 && b<=60){
//         console.log("work urban area only");
//     }
// else{
//     console.log("ERROR");
// }
// }



// document.getElementById("trigger").addEventListener('click', cal)
// function cal() {
//     const update = function () {
//         let date = document.querySelector("#age").value;
//         let olddate = new Date(date),
//             get_olddate = olddate.getTime(),
//             newdate = new Date(),
//             get_newdate = newdate.getTime(),
//             total = get_newdate - get_olddate;
//         let sec = Math.floor(total / 1000),
//             min = Math.floor(total / (1000 * 60)),
//             hour = Math.floor(total / (1000 * 60 * 60)),
//             day = Math.floor(total / (1000 * 60 * 60 * 24)),
//             week = Math.floor(total / (1000 * 60 * 60 * 24 * 7)),
//             month = Math.floor(total / (1000 * 60 * 60 * 24 * 30.41)),
//             years = Math.floor(total / (1000 * 60 * 60 * 24 * 365.25));
//         let funcal = function (x, y) {
//             let a = document.querySelector(x);
//             a.innerHTML = y;
//         }
//         funcal("#year", years + "year");
//             funcal("#month", month + "month");
//             funcal("#week", week + "week");
//             funcal("#days", day + "days");
//             funcal("#hour" ,hour + "hour");
//             funcal("#mint", min + 'minite');
//             funcal("#second", sec + 'second');

//     }
//     setInterval(update, 1000);

// }






// let a=prompt("give a first string"),
//     b=prompt("give a second string"),
//     c=["a","e","i","o","u"],
//     ab=0,bc=0;
//     for(i=0;i<a.length;i++){
//         for(j=0; j<c.length; j++){
//             if(a[i]==c[j]){
//                 ab++;
                
//             }
           
//         }
        
//     }
//     console.log(ab);
//     for(i=0;i<b.length;i++){
//         for(j=0; j<c.length; j++){
//             if(b[i]==c[j]){
//                 bc++;
                
//             }
           
//         }
        
//     }
//     console.log(bc);


// if(ab>bc){
//     console.log("a have a more vowels");
// }
// else if(ab==bc){
//     console.log("a and b have equal vowels");
// }
// else{
//     console.log("b have a more vowels");
// }









// let a=parseInt(prompt("give a first string")),
//     b=parseInt(prompt("give a second string")),
//     a_value,b_value,
//     c=["a","e","i","o","u","A","E","I","O","U"];
//     // c="aeiouAEIOU";

//     function row(x,y){
//        let ab=0;
//        for(i=0; i<a.length; i++){
//             for(j=0; j<c.length; j++){
//                 if(a[i]==c[j]){
//                     ab++
//                 }
//             }
//        }
//        return ab
//     }
//     row(a,c);
//     row(b,c);
//     // console.log(ab);
//     // console.log(b_value);





// let a=parseInt(prompt("give a number")),
//     remain,div;
//     remain=a%10;
//     div=remain/10;








// let n=parseInt(prompt("enter the number")),remainder,a=[],i=0;
// while (n > 0) {
//     n = parseInt(n);
//     remainder = n % 10;
//     n = n / 10;
// 	i=remainder;
// 	if(remainder>0){
// 	console.log("");
//     console.log(remainder);
// 	}    
// }
 
 




// Nearest Larger value in array

// function Callback(){
//     empty=empty.sort(function(a,b){return a-b});
//     if(empty==""){
//     console.log("-1");
// }else{
//     console.log(empty[0]);
// }
// }
// let array=[10,40,30,50,20];

//     for(i=0; i<array.length; i++){
//         for(j=0; j<array.length; j++){
//             if(a[i]<a[j]){
//                 empty.push(b[j]);
//             }
//         }
//         Callback();
//     }
// let empty=[];















// let date=new Date();
// console.log(date);
// let time=date.getTime();
// console.log(time);
// let date1=new Date(20/2/1895);
// console.log(date1);
// let time1=date1.getTime();
// console.log(time1);

// let totel=time-time1;
// console.log(totel);


// let date_old=new Date(09/10/2022);
// let date_new=new Date();
// let old_time=date_old.getTime();
// let crt_time=date_new.getTime();
// let total=crt_time-old_time;
// let hour=Math.floor(total/(1000*60*60));
// console.log(hour);

// let date=new Date(20/11/2000);
//  let day=date.getDay(date);
//  console.log(day);
//  if(day==0){
//     console.log("sunday");
//  }
//  else if(day==1){
//     console.log("monday");  
//  }
//  else if(day==2){
//     console.log("tuesday");  
//  }
//  else if(day==3){
//     console.log("wednesday");  
//  }else if(day==4){
//     console.log("thursday");  
//  }else if(day==5){
//     console.log("fryday");  
//  }else if(day==6){
//     console.log("saturday");  
//  }

// let old_date=new Date(date);
// console.log(old_date);
// let old=old_date.getDay(old_date);
// let new_date=new Date();
// let ne=new_date.getDay(new_date);











// document.getElementById("btn").addEventListener('click',fun);
// function fun(){
//  let input_color= document.getElementById("color").value;
//   let head= document.getElementById('header');
//   head.color=input_color;
// }



// let a,b,c,remain;
//  a=["diamond"]
//  for(i=0;i<a.length; i++){
//     remain=a%10==0;
//     console.log(remain[i]);
//  }
 


// let value=prompt("give a string"),assign;
//     assign=value;
//     assign=assign.split("");
//     assign=assign.reverse();
//     assign=assign.join("");
//     if(assign==value){
//         console.log("palindrome");
//     }
//     else{
//         console.log("not palindrome");
//     }




    // document.getElementById("btn").addEventListener('click',visible);
    // function visible(){
    //   let input_value=document.getElementById("call").value;
    //   let out_put=document.getElementById("heading").innerHTML=input_value;
    // }



// let number=444987616518976121
// let array=[];
// array=number;
// for(i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// let array=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3],a=0
// for(i=0;i<array.length;i++){
//     a=array[i];
//      console.log(a);
// }
 

   


function click(input_mail){
	let number=input_mail.replace(/[^a-zA-Z]/g,"");
	let charecter=input_mail.replace(/[^0-9]/g,"");
    
	console.log(number,charecter);
}
let mail=prompt("Ender a Mail");
let output=click(mail);
console.log(output);








let a= prompt('ender a value'),
    b=['a','e','i','o','u'],c=0;
    for (i=0; i<a.length; i++){
        for(j=0; j<=b.length; j++){
            if(a[i]==b[j]){
                c++;
                
            }
        }
 
    }
    console.log(c);







