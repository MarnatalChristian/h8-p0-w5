function makanTerusRekursif(waktu) {
    let eat = 0;
    let sisa;
    if(waktu === 0) {
        return eat;
    }
    else if(waktu > 0 && waktu <= 15) {
        return eat = 1;
    }
    else {
        eat++;
        sisa = waktu - 15;
    }
    return eat + makanTerusRekursif(sisa)
}
  
  // TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0