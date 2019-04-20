function main() {
  'use strict';

  let money = prompt("Please enter your name", "");
  let time = "12-02-2019";
  let income = [];

  let appData = {
    budget: money,
    timeData: time,
    optionalExpenses : {},
    spinOff: income,
    savings: false
  };

  console.log(money);
}

main();