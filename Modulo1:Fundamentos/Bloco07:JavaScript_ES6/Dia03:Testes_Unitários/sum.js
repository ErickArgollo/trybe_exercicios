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



module.exports = { sum, sub, myRemove, fizzBuzz}
