const names = ['Alex', 'Jacob', 'Mark', 'Max'];

function likes(names) {
    let nome = ''
    const count = names.length - 2;

   if(names.length === 1){
    return nome = `${names[0]} likes this`
   } else if(names.length === 2){
    return nome = `${names[0]} and ${names[1]} like this`
   }else if(names.length === 3){
    return nome = `${names[0]}, ${names[1]} and ${names[2]} like this`
   }else if(names.length > 3){
    return nome = `${names[0]}, ${names[1]} and ${count} others like this`
   } else {
      return `no one likes this`
   }
}

// 2 opção:

function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }