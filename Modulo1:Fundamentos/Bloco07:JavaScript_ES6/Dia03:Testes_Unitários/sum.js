const sum = (a, b) =>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error ('parameters must be numbers');
    }
    return a + b;
} 

const sub = (a, b) => a - b;

const myRemove = (array, item) => {
    let newArr = [];
    for(let i = 0; i < array.length; i += 1){
        if(array[i] !== item){
            newArr.push(array[i])
        }
    }
    return newArr;
}

const fizzBuzz = (num) => {
    

    if(typeof num !== 'number'){
        return false;
    }

    if(num % 3 == 0 && num % 5 === 0){
        return 'fizzBuzz';
    }
    else if(num % 3 === 0){
        return 'buzz';
    }
    else if(num % 5 === 0){
        return 'fizz';
    }
    
        return num;
}

function encode(string) {
    let arrayString = string.split('');
    let array = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < arrayString.length; j += 1) {
        if (arrayString[j] === array[i]) {
          arrayString[j] = i + 1;
        }
      }
    }
    return arrayString.join('');
  }

function decode(string){
    let arrayString = string.split('');
    console.log(arrayString)
    const array = [1, 2, 3, 4, 5];
    const vogals = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i < arrayString.length; i += 1){
        for(let j = 0; j < arrayString.length; j += 1){
            if(arrayString[j] == array[i]){
                arrayString[j] = vogals[i];
                
            }
        }
    }
    return arrayString.join('');
}

function techList(array, nome) {
    if (array.length === 0) {
      return 'Vazio!';
    }
    
    let arrayOrdem = array.sort();
  
    for (let i = 0; i < arrayOrdem.length; i += 1) {
      let objetoTechList = {
        tech: '',
        name: nome,
      };
      objetoTechList.tech = arrayOrdem[i];
  
      arrayOrdem[i] = objetoTechList;
    }
    return array;
  }


module.exports = { sum, sub, myRemove, fizzBuzz, encode, techList}
