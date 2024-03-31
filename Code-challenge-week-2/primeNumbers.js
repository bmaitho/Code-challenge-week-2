//creating that shows us prime numbers in a given range of numbers in an array
//using the readline method
const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})
//declaring an emty array to hold our numbers
let arr=[];
// function that checks whether a number is prime or not 
let isPrime = function(num) {
  if(num <= 1){
      return false;
  } 
  else{
    for(let i = 2 ; i <= Math.sqrt(num); i++){  
    
        if(num % i === 0){            
          return false;
          }
      }

     return true;  
   }
}

//Getting prime numbers from the array
function getPrimeNumbers(arr){
  //Empty array to hold the prime numbers
  let primeArr = [];

  //using for loop to iterate through each number in the array
  for (let i = 0; i < arr.length; i++) {
  //adding the prime number to the prime array
      if(isPrime(arr[i])){
         primeArr.push(arr[i]); 
      }
  }
  return primeArr;
}

// promts the user to enter the range of numbers 
rl.question("Enter range of numbers:",(primeArr)=>{
 const arr = primeArr.split(",").map(Number);
      console.log(`[${getPrimeNumbers(arr)}]`);
      rl.close();
  })
