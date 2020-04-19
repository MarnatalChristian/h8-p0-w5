function sorting(arrNumber) {
  for(let i = 1; i < arrNumber.length; i++){
      for (let j = 0; j < i; j++)
      if(arrNumber[i] < arrNumber[j]) {
         let temp = arrNumber[i]
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = temp
      }   
  } 
  return (arrNumber)
}
  
  
function getTotal(arrNumber) {
  let total = 0;
  let a = arrNumber[arrNumber.length - 1];
  // console.log(a)
  for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] == a){
          total++
      }
  }
  if (a === undefined && total == 0){
      return `''`;
  }
  else {
  return `angka paling besar adalah ${a} dan jumlah kemunculan sebanyak ${total} kali`
  }
}
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''