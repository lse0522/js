let n = 10;
// let n = 5;

let answer = 0;

if(n==2) return 1;
let i, j;
let primes=[0,0];
for (i = 2; i<=n; i++) primes[i]=1;
for (i = 2; i<=n; i++){
    if(!primes[i]) continue;
    for(j = i*2; j<=n; j+=i) primes[j]=0;
}


answer =  primes.reduce((acc,cur) => acc+cur);

console.log(answer);
