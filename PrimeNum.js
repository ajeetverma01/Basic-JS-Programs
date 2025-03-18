let n = 11, isPrime = n > 1;
for (let i = 2; i < n; i++) if (n % i === 0) isPrime = false;
console.log(isPrime ? "Prime" : "Not Prime");
