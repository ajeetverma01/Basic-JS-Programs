let num5 = 153, sum2 = 0, temp = num5;
while (temp) { sum2 += (temp % 10) ** 3; temp = Math.floor(temp / 10); }
console.log(sum2 === num5 ? "Armstrong" : "Not Armstrong");
