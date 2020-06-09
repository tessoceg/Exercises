
const bucket = [1, 2, 3, 4, 5];

const reverseArray = array => {
    let newArray = [];
   for (n = 0; n < array.length; n++) {
       newArray.unshift(array[n]);
   } return newArray;
};

console.log(reverseArray(bucket));

ducket = [2, 4, 6, 8, 10];

const reverseArrayInPlace = array => {
    
    for (n = 0; n < Math.floor(array.length / 2); n++) {
        let k = array[n]
        let x = array.length - 1 - n;
    array[n] = array[x];
         array[x] = k;
         return array;    
    }
};
reverseArrayInPlace(ducket);
console.log(ducket);