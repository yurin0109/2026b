/*실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 iSAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해보세요
*/

function isAdult( age ){
    if( age >= 20 ){ return true; }
    else{ return false; )
}
            
    


/* 실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해보세요.
const numbers = [ 10 , 20 , 30 , 40 , 50 ];
*/




// 3번
// 자판기 : 1. 1000원 , 3번 2. 3번이 1000원 이하 검사 3. 3번(콜라)와 잔돈 , 선택 불가능
const words = [ 'apple' , 'banana' , 'kiwi' , 'strawberry' ]

function findLongsWord( 문자열배열 ){
    // .length : 문자열 같이 반환 속성
    let max = 문자열배열[0] // 첫번째 
    for( let index = 1 ) ; index <= 문자열배열.length-1 ; index++{
        // 만약에 max에 저장된 문자열 같이 보다 index번째 문자열 길이가 이상이면
        if( max.length <= 문자열배열[index].length ){
            max = 문자열배열[index]
        }


    }

}

console.log( findLongsWord( words ) )












