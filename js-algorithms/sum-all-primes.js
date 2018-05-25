function sumPrimes(num) {
  //var to hold total value to return
  let primes = new Array();

  //func to find if num is prime
  function isPrime(value) {

    if(value < 2) return false;
    for (var i = 2; i < value; i++) {
        if(value%i==0)
            return false;
    }
    return true;
  };//func

  //loop nums until hit "num" and add primes to total
  // let val;
  // for (let i  = 0; i < 10; i++) {
  //   val = nextPrime()
  // }


  for(var i = 0; i < num; i++){
    if(isPrime(i)) {primes.push(i)};
  }

  let total;

  for (i of primes) {
    console.log(primes[i]);
  }

  // return num;
}

sumPrimes(10);
