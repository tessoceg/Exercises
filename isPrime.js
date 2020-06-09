
function isPrime(num) {
    for (let i = 0; i <= Math.abs(num); i++) {
    if (num <= 1) {
    return false;
    } else if (i === num) {
            return true;
        } else if (num % i === 0 && i !== 1) {
            return false;
        } 
    }
};
console.log(isPrime(7));
console.log(isPrime(32));
console.log(isPrime(199));