let num4 = 1234, sum = 0;
while (num4) { sum += num4 % 10; 
    num4 = Math.floor(num4 / 10); 
}
console.log(sum);
