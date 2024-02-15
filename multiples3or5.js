function solution(number) {
  const multiples = Array.from({ length: number }, (_, index) => console.log(index))
    .filter(num => num % 3 === 0 || num % 5 === 0);
  
  const result = multiples.reduce((sum, num) => sum + num, 0);

  return result;
}