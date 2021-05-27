function factorial(n) {
  if (n < 0) return;
  let result = 1;  
  for (n; n > 1; n--) {
    result *= n;
  }
  return result;
}

console.log(factorial(0))