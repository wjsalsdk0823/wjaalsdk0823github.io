//피보나치 수열1,2,3,5,8......
export function getFibonacci(num) {
    let i=0;
    let value1 =0;
    let value2 =1;
    let result =[];
    while(i<num) {
        let newValue = valuel + value2;
        
        result.push(newValue);

        value1 = value2;
        value2 = newValue;
        i++;
    }
    return result.toString();
}
console.log(getFibonacci(8));
console.log(getFibonacci(12));
console.log(getFibonacci(15));
console.log(getFibonacci(24));

function getPrimeNumber() {
    let results =[];
    //1과 1000사이의 숫자 중에 소수를 구하기 위한 반복문
    for(let i=1; i <=1000;i++) {
        let isPrimeNumber = true;
        //1과 자기 자신을 제외한 정수 중에 나눠지는 정수가 있는 지 체크 (소수인지 유효성 확인)
        for(let j =2;j<i;j++) {
        if(i% j ===0){
            isPrimeNumber=false; 
    }
}
//소수면 결과 값에 출력
if(isPrimeNumber) {
    results.push(i);
   }
}
return results;
}