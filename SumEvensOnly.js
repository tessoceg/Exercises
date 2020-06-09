const sumEvensOnly = (startNum, endNum) => {
    let sum = 0;
    if (endNum === startNum) {
        return ;
    } else {
        if (endNum % 2 === 0) {
            return sum = sum + endNum + sumEvensOnly(endNum - 1)
        } else {
            return sum += sumEvensOnly(endNum - 1);
        }

    } 

};

console.log(sumEvensOnly(0,10));
