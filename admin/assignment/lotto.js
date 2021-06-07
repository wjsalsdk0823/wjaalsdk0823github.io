const makeLotto = () => {//const는 블록법위의 상수를 설정. 상수의 값은 중복되지 않음
    //=>화살표 기호를 사용하면 클래스를 생성하고 객체 없이 함수 사용가능
    const lottoArr = new Set();//new는 사용자 정의 객체 횩은 내장 객체를 생성.객체(object)
    //const lottoArr을 set()으로 규졍
    while (lottoArr.size != 7) {//while은 조건이 참일 때 실행되는 반복문 실행 되기전 조건을 확인함.
        //lottoArr.size ! =7(당첨번호 6개 + 보너스번호)
        const lottoNum = parseInt((Math.random()* 45 + 1));
        //parseInt문자열을 정수로,반환,math.random설정 범위 내에서 난수(랜덤 숫자)를 출력
        //Math.random()* 45 + 1 -> 1~45의 랜덤 숫자를 출력
        lottoArr.add(lottoNum);//lottoArr.add(lottoNum)는 앞서 new set();에서 선언 된 setdp lottNum를 출력
    }
    return[...lottoArr];//return을 활용한 로또 수열 반환
}

let html = '<table>';//let html = '<table>';표 형식으로 스크립트 내용을 html에 출력

[0, 1, 2, 3, 4].forEach((element,index) => {//forEach 주어진 함수를 각가의 배열에 대해 실행. 로또 5회차 까지
    html += `<tr><td>${index + 1} 회</td>`;//다음 시행 회자 +1 ex(1회 차 실행 후 2회 차로 출력)
    //+=values의 값에 n을 추가
    const rowLottValues = makeLotto();//const rowLottoValues = makeLotto(); => 로또 수령 = 로또 생성함수
    rowLottValues.forEach(lotto=> html += `<td>${lotto}</td>`);
    html += '</td>';
});

html += '</table>';

document.write(html);//내용을 html문서에 출력