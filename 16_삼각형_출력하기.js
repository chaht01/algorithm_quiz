// 나영
function printTriangle(num) {
  var result = ''
  // 함수를 완성하세요
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < i + 1; j++) {
      result += '*'
    }
    result += '\n'
  }
  return result
}
console.log(printTriangle(3))

// ========================================
// 다른 사람들 중 특이했던 답안
// String.prototype.repeat이라는 메서드를 사용함.
// ========================================
function printTriangle(num) {
  return num < 1 ? '' : printTriangle(num - 1) + '*'.repeat(num) + '\n'
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(printTriangle(3))
