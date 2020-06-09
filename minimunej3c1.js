let min = (first,next) => {
    if (first > next){
        return first;
    } else if (first < next) {
        return next;
    } else {
        return 'the values are equal'
    }
};
console.log(min(8,4));