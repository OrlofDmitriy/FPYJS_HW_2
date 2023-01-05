function getPrime(n) {
    if (n === 0) {
        return [];
    }
    let number = 2
    let primeNumbers = [number]
    while (primeNumbers.length < n) {
        number++;
        check = true;
        for (let i = 0; i <= primeNumbers.length; i++) {
            if (number % primeNumbers[i] === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            primeNumbers.push(number);
        }        
    }
    return primeNumbers;
}

console.log(getPrime(process.argv[2]))