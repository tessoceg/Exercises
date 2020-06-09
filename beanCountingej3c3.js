
function countBs(string) {
    let sum = 0;
    for (n = 0; n < string.length; n++) {
        if (string[n] == 'B') {
            sum = sum + 1; 
        } 
     }
     return sum;
    }
     
  
console.log(countBs('BBBBBBBBBBBBBBB'));
//console.log('BeeBBB'[1]);
