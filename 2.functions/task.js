function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++){

    if (arr[i] > max) {
      max = arr[i];
    };

    if (arr[i] < min) {
      min = arr[i];
    };

    sum += arr[i];
    avg = sum / arr.length;
  };

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
};

function summElementsWorker(...arr) {

  if (arr.length > 0){

    let summ = 0;
    for (let i = 0; i < arr.length; i++){
      summ += arr[i];
    };
  
    return summ;
  } else {
    return 0;
  };
};

function differenceMaxMinWorker(...arr) {
  let difference = 0;

  if (arr.length > 0){
    return (Math.max(...arr) - Math.min(...arr));
  } else {
    return 0;
  };
};

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length  > 0){

    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      };
    };
  
    return (sumEvenElement - sumOddElement);
  
  } else {
    return 0;
  };
};

function averageEvenElementsWorker(...arr) {
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length > 0){

    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        countEvenElement += 1;
      };
    };

    return (sumEvenElement / countEvenElement);
    
  } else {
    return 0;
  };
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++){
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    };
  };

  return maxWorkerResult;
}
