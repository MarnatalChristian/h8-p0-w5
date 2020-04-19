function kaliTerusRekursif(angka) {
    var str = angka.toString();

    if(str.length == 1) {
        return angka;
    }
    
    else {
        let total = 1;
        for(let i = 0; i < str.length; i++) {
            total =  total * str[i];
            
        }
        return kaliTerusRekursif(Number(total))
    }

}
  
  // TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6