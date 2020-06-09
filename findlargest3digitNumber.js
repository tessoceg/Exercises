const findLargestNumber = (string) => {
    let currentNum = 0;
    for (let i = 0; i < 9; i++) {
        let currentThreeDigit = string[i] + string[i + 1] + string[i + 2];
        //console.log(Number(currentThreeDigit));
        if (Number(currentThreeDigit) > currentNum) {
            
            currentNum = currentThreeDigit;
        }
    } return currentNum;
};
console.log(findLargestNumber('1234567890'));