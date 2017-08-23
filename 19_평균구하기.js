// 19. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

// 1. 배열의 인자의 값을 다 더한다
// 2. 배열의 length만큼 나눈다.

function average(array){
  const sum = array.reduce(function(pre,cur){ return pre + cur });
  return sum/array.length;
}

var testArray = [5, 3, 10];
console.log(average(testArray)); // 4 