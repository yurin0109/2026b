// 문제 1
let 밑변 = Number(prompt ('밑변: '))
let 높이 = Number(prompt ('높이: '))
let 넓이 = 밑변*높이/2
console.log(`삼각형 넓이: ${넓이}`)

// 문제 2
let 섭씨 = Number(prompt ('섭씨: '))
let 화씨 = (섭씨 * 9/ 5) + 32
console.log(`화씨 온도: ${화씨}`)

// 문제 3 
let 태어난년도 = Number(prompt ('태어난 년도: '))
let 현재나이 = 2025 - 태어난년도
console.log(`2025년도 현재 나이: ${현재나이}`)


// 문제 4
let 키 = Number(prompt ('키: '))
let 몸무게 = Number(prompt ('몸무게: '))
let BMI지수  = 몸무게 / ((키 / 100) * (키 / 100))
console.log(`나의 BMI 지수: ${BMI지수}`)

// 문제 5
let 아이디 = prompt ("아이디: ")
let 이메일 = prompt ("이메일: ")
let 결과1 = 아이디 == 'admin' || 이메일 == 'admin@test.com'
let 결과2 = 결과1 == true ? '관리자' : '일반사용자'
console.log(`${결과2}`)
// 정답2
let 아이디 = prompt('>아이디 입력')
let 비밀번호 = prompt('>비밀번호 입력')
let 결과2 = 아이디 == 'admin' && 비밀번호 == '1234' // 3.처리
//4. 출력 (분기 : )
if(결과2){console.log('로그인 성공'); }
else{ console.log('로그인 실패'); }





// 문제 6 모르겠어~!
let 점수 = Number(prompt ('점수를 입력하세요: '))
let 결과 = 80 <= 점수 ? 'B' : 'C'
let 결과2 = 90 <= 점수 ? 'A' : 결과
document. querySelector('h2').innerHTML = '성적: ${결과2}'


100 < 'A' <= 90
90 < 'B' <= 80
'c' < 70


H2태그로 출력

<h2> 
*/

// 문제 7
let 나이 = Number(prompt ('나이를 입력하세요: ')) 
let 결과 = 20 <= 나이 <= 29 ? '이벤트 대상입니다' : '이벤트 대상이 아닙니다'
console.log(`${결과}`)


// 문제 8
// 좋아요 카운터 
// 변수 likeCount를 3으로 선언
// 증감 연산자(++) 사용해 변수 값 1씩 증가
// 좋아요 [숫자] 형식으로 새로운 '좋아요 수' 출력
// let likeCount = 3;


let likeCount = 3
likeCount ++
console.log(`좋아요 ${likeCount}`)


// 문제 9
// let todoList = ['장보기', '과제하기'];
// 초기 list 배열 마지막에 추가
// 요소 추가 시 .push() 메소드 사용


let todoList = ['장보기', '과제하기'];
todoList.push('놀기')
console.log(`${todoList}`)


// 문제 10 
// "마지막 대기자는 [이름]입니다" 출력

let waitingList = ['김민준', '이서연', '박도윤', '최지우']
let 마지막 = waitingList[3]
console.log(`마지막 대기자는 ${마지막}입니다`)



