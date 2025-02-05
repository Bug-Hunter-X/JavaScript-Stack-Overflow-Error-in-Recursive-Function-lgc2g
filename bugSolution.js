function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else if (a < b){
    return foo(a + 1, b); 
  } else {
    return false; //This will never be reached
  }
}

console.log(foo(1, 5)); //This will now work correctly
console.log(foo(5,1)); //This works as expected
console.log(foo(5,5));//This works as expected