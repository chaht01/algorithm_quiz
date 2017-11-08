// 18. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

// 1. arr%2 === 0 && arr > 3;
// 2. 

function getArray(arr) {
  const result =[];
  const arrMax = arr.map(function(value){
    if (value%2 === 0 && value>3){ result.push(value);}
  });
  return result;
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]