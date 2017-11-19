// 19. 평균구하기
// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 입력된 수가 짝수라면 2로 나누고, 홀수라면 3을 곱하고 1을 더한 다음, 결과로 나온 수에 같은 작업을 1이 될 때까지 반복할 경우 모든 수가 1이 된다는 추측입니다. 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. collatz 함수를 만들어 입력된 수가 몇 번 만에 1이 되는지 반환해 주세요. 단, 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// 1. 반복해서 패턴이 순환해야하고  > 반복문 중 택 1
// 2. 턴이 돌 때마다 count에 숫자를 더한다.
// 1일때 카운트 숫자를 출력해야하므로, 1일 때 종료하도록함.

function collatz(num) {
  const answer = 0

  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = num * 3 + 1
    }
    answer++
    if (answer === 500) {
      return (answer = -1)
    }
  }
  return answer
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6))

// 다른 사람 정답
// 1. 삼항연산자 사용
function collatz(num, count = 0) {
  return num == 1
    ? count >= 500 ? -1 : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count)
}

// 2. for문 사용
function collatz(num) {
  for (var answer = 0; answer < 500; answer++) {
    if (num % 2 == 0) {
      num = num / 2
    } else if (num == 1) {
      return answer
    } else if (num % 2 == 1) {
      num = num * 3 + 1
    }
  }
  return -1
}
