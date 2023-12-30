let a = 2;
// let a = 3;

let b = 1;
let n = 20;

let answer = 0;


while (n >= a) { // n이 a보다 크거나 같은 동안 반복합니다. 즉, 빈병이 교환 비율보다 많거나 같을때 계속 실행됩니다.

    // parseInt() 함수는 문자열 인자를 파싱하여 특정 진수의 정수를 반환합니다.
    // 현재 가진 n을 교환 비율 a로 나누어 얻을수 있는 콜라 병 수를 계산해 answer에 더해줍니다.
    answer += parseInt(n / a) * b; 

    // 교환 후 남은 빈 병의 수를 업데이트를 해줍니다.
    // 교환으로 얻은 콜라 병을 다 마시고 남은 빈병과 교환하기 전에 남은 빈병을 합칩니다.
    n = parseInt(n / a) * b + n % a;
}
console.log(answer)