let number2="12345",sum1=0,result1;
	odd=number2.replace(/[^13579]/g,"");

	console.log(odd);
	sum_odd=odd.split("");
	//console.log(sum_odd);
	
	for(i=0;i<sum_odd.length;i++){

		sum_odd[i]=parseInt(sum_odd[i]);
		result1=sum1+sum_odd[i];
		sum1=result1;
		
	}
	console.log(sum1); */
	
let number="12345",sum=0,result,
	even=number.replace(/[^24680]/g,""),
	odd=number.replace(/[^13579]/g,"")

	console.log(even);
	console.log(odd);
	sum_even=even.split("");
	//console.log(sum_even);
	
	for(i=0;i<sum_even.length;i++){

		sum_even[i]=parseInt(sum_even[i]);
		result=sum+sum_even[i];
		sum=result;
		
	}
	console.log(sum); 