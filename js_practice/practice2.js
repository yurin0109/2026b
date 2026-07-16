// 문제 1

let 밑변 = Number(prompt("밑변 : "));
let 높이 = Number(prompt("높이 : "));

let 넓이 = 밑변 * 높이 / 2;

console.log(`삼각형 넓이 : ${넓이}`);


// 문제 2

let 섭씨 = Number(prompt("섭씨 : "));

let 화씨 = (섭씨 * 9 / 5) + 32;

console.log(`화씨 온도 : ${화씨}`);


// 문제 3

let 태어난년도 = Number(prompt("태어난 연도 : "));

let 현재나이 = 2026 - 태어난년도;

console.log(`현재 나이 : ${현재나이}`);


// 문제 4

let 키 = Number(prompt("키 : "));
let 몸무게 = Number(prompt("몸무게 : "));

let BMI지수 = 몸무게 / ((키 / 100) * (키 / 100));

console.log(`BMI : ${BMI지수}`);


// 문제 5

let 아이디 = prompt("아이디 : ");
let 이메일 = prompt("이메일 : ");

let 관리자여부 =
    아이디 == "admin" ||
    이메일 == "admin@test.com";

let 사용자 =
    관리자여부 ? "관리자" : "일반 사용자";

console.log(사용자);


// 문제 5-2

let 로그인아이디 = prompt("아이디 입력");
let 비밀번호 = prompt("비밀번호 입력");

let 로그인결과 =
    로그인아이디 == "admin" &&
    비밀번호 == "1234";

if (로그인결과) {

    console.log("로그인 성공");

}
else {

    console.log("로그인 실패");

}


// 문제 6

let 점수 = Number(prompt("점수를 입력하세요."));

let 성적;

if (점수 >= 90) {

    성적 = "A";

}
else if (점수 >= 80) {

    성적 = "B";

}
else {

    성적 = "C";

}

document.querySelector("h2").innerHTML =
    `성적 : ${성적}`;


// 문제 7

let 나이 = Number(prompt("나이를 입력하세요."));

let 이벤트결과 =
    나이 >= 20 && 나이 <= 29
    ? "이벤트 대상입니다."
    : "이벤트 대상이 아닙니다.";

console.log(이벤트결과);


// 문제 8

let likeCount = 3;

likeCount++;

console.log(`좋아요 ${likeCount}`);


// 문제 9

let todoList = ["장보기", "과제하기"];

todoList.push("놀기");

console.log(todoList);


// 문제 10

let waitingList = [
    "김민준",
    "이서연",
    "박도윤",
    "최지우"
];

let 마지막대기자 =
    waitingList[waitingList.length - 1];

console.log(`마지막 대기자는 ${마지막대기자}입니다.`);