// 17. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

// 1. 인접한 요소의 곱을 구한다. -> 배열에 담는다.
// 2. reduce로 비교한다.
// 3. 큰 값 추출

function adjacentElementsProduct(arr) {
  const multiplyArr = [];
  for(i=0; i<arr.length-1; i++){
    multiplyArr.push(arr[i]*arr[i+1]);
  }
  var numMax = multiplyArr.reduce(function(pre,cur){
    return Math.max(pre,cur);
  });
  return numMax;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21