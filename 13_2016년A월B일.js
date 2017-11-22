/* 
13_2016년A월B일
https://programmers.co.kr/learn/challenge_codes/178

2016년 1월 1일은 금요일입니다. 2016년 A월 B일은 무슨 요일일까요? 두 수 A,B를 입력받아 A월 B일이 무슨 요일인지 출력하는 getDayName 함수를 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각

SUN,MON,TUE,WED,THU,FRI,SAT

를 출력해주면 됩니다. 예를 들어 A=5, B=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환하면 됩니다. 

*/

// 1. 처음 했던 방법
// A월이 1,3,5,7,10,12 > 31일
// A월이 4,6,8,9,11 > 30일
// A월이 2 > 28일

// 31일 + 1 = 32 // 배열에서 금요일부터 32번 후의 값 // 
// 1월 0
// 2월 31일 + b 
// 3월 31일 + 29일 + b
// 4월 31일 + 29일 + 31일 + b
// 5월 31일 + 29일 + 31일 + 30일 + b
// 6월 31 + 29 + 31 + 30 + 31 = 31*3 + 30*2 - 2
// 7월 31*3 + 30*3 -2
// 8월 31*4 + 30*3 -2
// 9월 31*5 + 30*3 -2
// 10월 31*5 + 30*4 -2
// 11월 31*6 + 30*4 -2
// 12월 31*6 + 30*5 -2

// 만약 7일 arr[0]
// 6일 arr[6]
// x일을 7로 나눈후 나머지값 arr[x%7]
// x의 값은 ?

function getDayName(a, b) {
  let answer = "";
  let month = a;
  let date = 0;
  let inputDate = b;
  let week = 0;

  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
  switch (month) {
    case 1:
      date = 0
      break;
    case 2:
      date = 31
      break;
    case 3:
      date = 31 + 29
      break;
    case 4:
      date = 31 * 2 + 29
      break;
    case 5:
      date = 31 * 2 + 30 * 2 - 1
      break;
    case 6:
      date = 31 * 3 + 30 * 2 - 1
      break;
    case 7:
      date = 31 * 3 + 30 * 3 - 1
      break;
    case 8:
      date = 31 * 4 + 30 * 3 - 1
      break;
    case 9:
      date = 31 * 5 + 30 * 3 - 1
      break;
    case 10:
      date = 31 * 5 + 30 * 4 - 1
      break;
    case 11:
      date = 31 * 6 + 30 * 4 - 1
      break;
    case 12:
      date = 31 * 6 + 30 * 5 - 1
      break;
  }
  date = date + inputDate
  return day[date % 7];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));




// 코드가 너무 길다.
// 2. 반목문으로 교체
function getDayName(a, b) {
  let answer = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED",];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  sum += b;

  return answer[(sum % 7)];
}


// Date 메소드를 사용해보자.
// 3. 메소드 사용
function getDayName(a, b) {
  let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016,${a},${b}`);
  let day = date.getDay()
  return arr[day];
}
// 템플릿 리터럴을 사용하지 않으면 값이 이상하게 나온다.
// 이유 : 
//year, month, date
// 날짜의 각 부분을 표현하는 정수값. 월(month)부분은 0부터 11까지의 값을 가지며, 0이 1월을, 11이 12월을 가리킨다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date

// let date = new Date(2016,a-1,b) 이렇게 넣어야 한다.