function createPhoneNumber(numbers){
  const ddd = numero.slice(0, 3).join('');
  const number1 = numero.slice(3, 6).join('');
  const number2 = numero.slice(6, 10).join('');
  const result = `(${ddd}) ${number1}-${number2}`
  return result;
}

//Refatorando:

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))