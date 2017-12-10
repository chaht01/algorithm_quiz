// 김나영

// 1. 2중배열 사용, 10*10 행렬의 배열 초기화
// 2. 각 줄에 1개씩 MINE 셋팅하기
// 3. 해당 인덱스 주변의 8개 인덱스의 값을 확인하여 MINE 갯수를 더한다.
// 4. 출력


// 1. 빈 배열
let mineArr = [];
let rowNum = 10
let colNum = 10
// 첫 행과 마지막 행, 첫 열과 마지막 열의 예외처리를 위해서 앞,뒤,위,아래, 한 줄씩 추가
function setInit(rows, columns) {
  let mineArrInit = new Array(rows + 2);
  for (var x = 0; x < rows + 2; x++) {
    mineArrInit[x] = new Array(columns + 2)
  }
  for (var i = 0; i < rows + 2; i++) {
    for (var j = 0; j < columns + 2; j++) {
      mineArrInit[i][j] = 0
    }
  }
  mineArr.push(...mineArrInit)
  setMine(mineArr)
}

setInit(rowNum, colNum)

// 2. row당 랜덤 column에 지뢰놓기
function setMine(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    let mineIndex = Math.floor(Math.random() * 10)
    mineIndex === 0 ? mineArr[i][0] === 0 : mineArr[i][mineIndex] = '*'
  }
  totalCount(colNum, colNum)
}


// 3. 해당 인덱스 주변의 8개 인덱스의 값을 확인하여 MINE 갯수를 더한다.
function countMine(row, col) {
  let mineCnt = 0;
  if (row <= 0 || row + 1 >= mineArr.length || col <= 0 || col + 1 >= mineArr.length) {
    return 0;
  }
  if (mineArr[row - 1][col - 1] === '*') mineCnt++;
  if (mineArr[row - 1][col] === '*') mineCnt++;
  if (mineArr[row - 1][col + 1] === '*') mineCnt++;
  if (mineArr[row][col - 1] === '*') mineCnt++;
  if (mineArr[row][col + 1] === '*') mineCnt++;
  if (mineArr[row + 1][col - 1] === '*') mineCnt++;
  if (mineArr[row + 1][col] === '*') mineCnt++;
  if (mineArr[row + 1][col + 1] === '*') mineCnt++;
  return mineCnt
}

function totalCount(rows, columns) {
  for (var i = 0; i < mineArr.length; i++) {
    for (var j = 0; j < mineArr.length; j++) {
      if (mineArr[i][j] !== '*') {
        var a = countMine(i, j)
        mineArr[i][j] = a;
      }
    }
  }
  print(mineArr)
}


// 4. 출력
function print(arr) {
  var result = ''
  for (var i = 1; i < arr.length - 1; i++) {
    for (var j = 1; j < arr[i].length - 1; j++) {
      result += arr[i][j]
    }
    result += '\n'
  }
  console.log(result)
}