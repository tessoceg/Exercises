const madLibs = (string, array) => {
    let newArray = [];
    newArray.concat(array);
    let stringArray = string.split('');
    //console.log(stringArray);
    for(let i = 0; i < string.length; i++) {
        if (newArray.length < 1) {
            newArray = newArray.concat(array);
        }
        if (stringArray[i] === '*') {
                let word = newArray.shift();
                //console.log(word);
                stringArray[i] = word;
            }
        
    } return stringArray.join('');
}  
    


console.log(madLibs('My name is * and I am a *.', ['Sean', 'potato']));
console.log(madLibs('My name is * and I am a *.', ['Sean', 'potato', 'extra', 'words']));
console.log(madLibs('Marching is fun: *, *, *, *!', ['left', 'right']));