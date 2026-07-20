/*실습 1: 성인 인증 함수
나이(age)를 매개변수로 받아, 20세 이상이면 true를, 미만이면 false를 반환하는 iSAdult 함수를 만드세요. isAdult(25)와 isAdult(17)의 결과를 각각 콘솔에 출력해보세요
*/

function isAdult( age ){
    if( age >= 20 )
        console.log( 'true' )
    }
        else if( age < 20 ){
            console.log( 'false' )


    }
            
    isAdult(25)

    isAdult(17)




/* 실습 2: 배열의 총합 구하기
숫자로 이루어진 배열을 매개변수로 받아, for 반복문을 사용해 모든 요소의 합계를 구하여 반환하는 sumArray 함수를 만드세요. 아래 numbers 배열로 테스트해보세요.
const numbers = [ 10 , 20 , 30 , 40 , 50 ];
*/








/*예제 7: 배열을 매개변수로 전달
임의의 이름 들이 담긴 배열을 매개변수로 받아, for 반복문을 사용하여 배열의 모든 요소를 콘솔에 하나씩 출력하는 printFruits 함수를 정의하시오. */
function printFruits( namaList ){
    for( let index = 0 ; index <= nameList.length - 1 ; index++ ){
        console.log( namaList[index] )
    }
}
printFruits( [ '사과' , '포도' , '바나나' ] )                                                                                                                                                                                                                                                                                                                                                                                                                                                     
