//Our task is to create a function that swaps the case the letters of an original sentence
const readline= require("readline");
const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
})
//function that swaps the case the letters of an original sentence
function swapCase(string) {
    //splits the input string into individual character
    return string.split("") .map(character => {
        //checks if the character is an uppercase letter so it can be changed to lowercase
    if (character=== character.toUpperCase()){ 
    return character.toLowerCase();
      // cheks if the character is lowercase so it can be changed to uppercase
}   else {
    return character.toUpperCase();

}
//joins the modified characters back into a string
     }) .join("");
}

//prompts the user to enter a sentence 
rl.question("Enter sentence:",(string)=>{
    const swappedString = swapCase(string);
  console.log(swappedString)
         rl.close();
     })
   