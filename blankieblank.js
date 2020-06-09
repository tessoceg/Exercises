function rowSumOddNumbers(n) {
    let startingNum = (n * n) - (n - 1);
    let sum = startingNum;
    let currentNum = startingNum;
        for(let i = 1; i = n; i++) {
        currentNum  = currentNum + 2;
        sum += currentNum;
      };
      return sum;
    };
    console.log(rowSumOddNumbers(42));