function fibonacci(n) {
    
if (n <= 1) {
return 1;
  }
    console.log((`This is at the line ${n-1}/${n-2} :${fibonacci(n-1) + fibonacci(n-2)}`))
    return fibonacci(n - 1) + fibonacci(n - 2);
}
    console.log(fibonacci(10))