function sumPrimes(num) {
  //var to hold total value to return
  let primes = new Array();
  let total = 0;

  //func to find if num is prime
  function isPrime(value) {

    if(value < 2){
      return false;
    }

    for (var i = 2; i < value; i++) {
        if(value%i==0)
            return false;
    }

    return true;
  };//func

  //## this function finds primes numbers too
  // function isPrime(number) {
  //   var start = 2;
  //   while (start <= Math.sqrt(number)) {
  //       if (number % start++ < 1) return false;
  //   }
  //   return number > 1;
  // }


  for(let j = 2; j <= num; j++){
    if(isPrime(j)) {primes.push(j)};
  }



  for (let k = 0; k < primes.length; k++) {
    // console.log(primes[k]);
    total += primes[k];
  }

  console.log(primes.length);

  console.log(total);

  // console.log(primes);

}

// sumPrimes(10);
// sumPrimes(977)


//ANSWER
function sumPrimes(num) {
  //var to hold total value to return
  let primes = new Array();
  let total = 0;

  function isPrime(value) {
    if(value < 2){
      return false;
    }

    for (var i = 2; i < value; i++) {
        if(value%i==0)
            return false;
    }

    return true;
  };

  for(let j = 2; j <= num; j++){
    if(isPrime(j)) {primes.push(j)};
  }

  for (let k = 0; k < primes.length; k++) {
    // console.log(primes[k]);
    total += primes[k];
  }

  return total;
}
