// Write a function that takes an array of functions and a number that will be piped through all those functions. 
// The input number passes through the first function, 
// whose output is passed as input to the second function, 
// whose output is passed as input to the third function, and so on. 
// Use recursion to return the final output of the last function in the array.

function flow(input, funcArray) {
  
    const callback = funcArray[0];
    
    
    if(!funcArray.length)
      return input;
    
    input = callback(input);
  
    
    return flow(input, funcArray.slice(1));
  }
  
  // To check if you've completed the challenge, uncomment this code!
  function multiplyBy2(num) { return num * 2; }
  function add7(num) { return num + 7; }
  function modulo4(num) { return num % 4; }
  function subtract10(num) { return num - 10; }
  const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
  console.log(flow(2, arrayOfFunctions)); // -> -7