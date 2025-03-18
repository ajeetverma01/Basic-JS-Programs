let a2 = 36, b2 = 60;
while (b2) [a2, b2] = [b2, a2 % b2];
console.log(a2);