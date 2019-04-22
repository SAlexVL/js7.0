function main() {
  'use strict';

  let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресение"],
      byId = ["demo1", "demo2", "demo3", "demo4", "demo5", "demo6", "demo7"],
      today = "понедельник";

  for (let i = 0; i < 7; i++ ) {
    document.getElementById(byId[i]).innerHTML = "-> " + week[i];

    if (week[i] == today) {

    let elem = document.getElementById(byId[i]);
        elem.style.fontStyle = 'italic';
    }

  }

  let arr = ["12345", "23456", "34567", "45678", "56789", "67890", "789098"];
  for (let i = 0; i < 7; i++) {
    if ((arr[i][0].indexOf('3') !== -1) || (arr[i][0].indexOf('7') !== -1)) {
      console.log(arr[i]);
  }
  }

}

  main();