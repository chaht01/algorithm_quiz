/*

numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
예를들어 s가 pPoooyY면 True를 리턴하고 Pyy라면 False를 리턴합니다.

*/

function numPY(s) {
  let pCount = 0;
  let yCount = 0;

  if (typeof s !== 'string') {
    return '문자가 아닙니다.'
  }

  if (s.length === 0) return true;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === 'p') pCount++
    if (s[i].toLowerCase() === 'y') yCount++
  }
  return pCount === yCount ? true : false
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY"))
console.log(numPY("Pyy"))


//--------------------------------------------
// 다른사람 풀이
//--------------------------------------------

function numPY(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}