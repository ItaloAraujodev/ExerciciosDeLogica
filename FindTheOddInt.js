function findOdd(array){
  let count = 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
      count = 0;
      for (let j = 0; j < array.length; j++) {
          if (array[i] == array[j]) {
              count++;
          }
      }
      if (count % 2 != 0) {
          result = array[i];
      }
  }
  return result;
}