const nome = "Hey fellow warriors"

function spinWords(string){
    const array = string.split(" ")
    let novo = ''

    for(let i = 0; i < array.length; i++){
        if(array[i].length >= 5){
            novo += array[i].split('').reverse().join('') + ' '
        } else {
            novo += array[i] + ' '
        }
    } 

    return novo.trim();
}

console.log(spinWords(nome))