/*
adder함수는 정수 a, b를 매개변수로 입력받습니다.
두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하세요. a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
예를 들어 a가 3, b가 5이면 12를 리턴하면 됩니다.

a, b는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않습니다.
*/

function adder(a, b) {
  let max = 0;
  let min = 0;
  let result = 0;

  if (a > b) {
    (max = a), (min = b);
  } else if (a < b) {
    (max = b), (min = a);
  } else if (a == b) {
    return a;
  }

  for (let i = min; i <= max; i++) {
    result = result + i;
  }
  return result;
}

console.log(adder(3, 5));

// 다른사람 풀이
// 1. Math.abs 메소드 사용 (절대값을 구하는 메소드_)
// 흠;;
function adder(a, b) {
  var result = 0;
  return (a + b) * (Math.abs(b - a) + 1) / 2;
}
