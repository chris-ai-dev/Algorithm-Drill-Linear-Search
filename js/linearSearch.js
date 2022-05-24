const linear =(name)=>{
    
    const arrayToSearchThrough = [];
    for (let i = 0; i < name.length; i++) {
    arrayToSearchThrough.push(name[i]);
    }
    return arrayToSearchThrough;
}

const randomList = linear("banana")

const linearSearch =(item,array)=>{
    const indexsArray = [];
    for (let i = 0; i < array.length; i++) {
        if( array[i] === item) {
        indexsArray.push(i);
        }
    }
    return indexsArray;
}

console.log(linearSearch('a',randomList))
// exports.linearSearch = function(valueToFind, arrayToSearchThrough) ({}
// };

