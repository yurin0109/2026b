// 문제 1 : 과일 목록 정리

let fruitList = ['사과', '바나나'];

let 과일이름 = prompt('추가할 과일 이름을 입력하세요.');

fruitList.push(과일이름);

console.log(fruitList);


// 문제 2 : 성별에 따른 색상 지정

let 주민등록번호 = prompt('주민등록번호를 입력하세요.');

let 성별번호 = 주민등록번호[7];

let 결과 = 성별번호 == '1' || 성별번호 == '3';

if (결과) {

    console.log('blue');

}
else {

    console.log('red');

}


// 문제 3,4
// 혼자 해보기


// 문제 5 : 세 수 중 가장 큰 수 찾기

let 정수1 = Number(prompt('첫 번째 정수 : '));
let 정수2 = Number(prompt('두 번째 정수 : '));
let 정수3 = Number(prompt('세 번째 정수 : '));

let max = 정수1;

if (max < 정수2) {

    max = 정수2;

}

if (max < 정수3) {

    max = 정수3;

}

console.log(max);


// 문제 6
// 풀었음


// 문제 7
// 오름차순 정렬


// 문제 8