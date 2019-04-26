function main() {
  'use strict';

  nextPrime:
  for (var i = 2; i < 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    console.log( "Для простого числа " + i + " делителями являются: 1 и " + i); 
  }

}

main();