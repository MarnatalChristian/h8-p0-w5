function hapusSimbol(str) {
    //cara 1
    return str.replace(/[^\w]/gi, '');

    //cara 2
    // let alphaNumber = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // var hasil ='';
    // for(let i = 0; i < str.length; i++) {
    //     for(let j = 0; j < alphaNumber.length; j++) {
    //         if(str[i] == alphaNumber[j]) {
    //             hasil += str[i];
    //         }
    //     }
    // }
    // return hasil;


  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100