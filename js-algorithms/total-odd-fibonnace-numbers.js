function sumFibs(num) {

  //holding values
  let currentNum = 1;
  let previousNum = 0;
  let total = 0;

  while(currentNum <= num){

    if(currentNum % 2 == 1){
      total += currentNum;
    }

    // console.log(total);

    currentNum += previousNum;
    // console.log(currentNum);

    previous = currentNum - previousNum;
    previousNum = previous;
    // console.log(previousNum);

  }

  console.log(`total: ${total}`);

};//sumFibs
sumFibs(4)

sumFibs(1000)

//fib 1, 1, 2, 3, 5, 8
//for 0, 1, 2, 3, 4, 5


//Answer

function sumFibs(num) {
  let currentNum = 1;
  let previousNum = 0;
  let total = 0;
  while(currentNum <= num){
    if(currentNum % 2 == 1){
      total += currentNum;
    }
    currentNum += previousNum;
    previous = currentNum - previousNum;
    previousNum = previous;
  }
  return total
}
