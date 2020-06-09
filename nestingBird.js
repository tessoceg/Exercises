const nestingBird = (array) => {
    let birb = [];
    for(let i = 0; i < array.length; i++) {
        let element = array[i] 
        if (Array.isArray(element)) {
           birb = birb.concat(nestingBird(element))
        } else {
           birb = birb.concat(element);
        }
    
    } return birb.join('');
}
console.log(nestingBird(['r', 'o', ['b', ['i'], 'n']]));