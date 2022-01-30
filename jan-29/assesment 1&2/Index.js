var num=prompt("Enter a number");
num=parseInt(num);
if(isNaN(num)){
    alert("Please enter a valid number");
} else{ 
    var count=0;
    for(var i=2; i<num; i++){ 
         if(num%2==0){ 
             count=count+1;
             break;
        }
    }
}
if(count==0){  
     console.log(num +" is  prime number");
}else{ 
    console.log(num+" is not a prime number");
}