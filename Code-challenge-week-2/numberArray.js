const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})
//We are trying to create a function that accepts two numbers and generates an array of numbers that are in between them 
function generateArray(value1,value2){
  let arr = [];
 //checks if value1 is less than vallue2
  if(value1<=value2){
  //generates values in ascending order
  for(let i = value1; i<=value2; i++){
arr.push(i);
}
  }
  else{
    //checks if value 1 is greater than value2 and generates values in descending order
    for(let i = value1; i>=value2; i--){
      arr.push(i);
    }
  }
return arr;
}

//prompts the user to enter two numbers
rl.question("value1:",(value1,)=>{
  rl.question("value2:",(value2)=>{
    const numberArray = generateArray(value1,value2);
console.log(`[${generateArray(value1,value2)}]`);
       rl.close();
   })})
 