let chislo = 33721;
let massav = [];
let proisv = 1;

for (var i = 0; chislo != 0; i++) {
  massav[i] = chislo % 10;
  chislo = Math.floor(chislo / 10);
}

console.log(massav);

for (var j = 0; j < massav.length; j++) {
  proisv *= massav[j];
}

console.log(proisv);