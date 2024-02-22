function order(words){
  const palavrasArray = words.split(" ")

  const newArray = palavrasArray.sort((a, b) => {
    let numA = parseInt(a.match(/\d+/)[0])
    let numB = parseInt(b.match(/\d+/)[0])

    return numA - numB
  })

  return newArray.join(' ')
}