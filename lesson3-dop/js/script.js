function main() {
  'use strict';

  let str = "урок-3-был слишком легким";
      str2 = "";
      str3 = "";  
  // --------1---------
  str2 = str.split('');
  str2[0] = str[0].toUpperCase();
  str3 = str2.join('');
  console.log(str3);
  // --------2--------
  for (let i = 0; i < str.length; i++) {
    if (str2[i] == "-") {
      delete str2[i];
      str2[i] = " ";
    }
  }
  str3 = str2.join('');
  console.log(str3);
  // --------3 a--------
  str3 = str3.split(' ');
  let removed = str3.splice(4, 4);
  console.log(str3.join(' '));
  // --------3 b--------
  str2 = removed[0].split('');
  str2[4] = str2[5] = "o";
  console.log(str2.join(''));
  //--------4--------
  let arr = [20, 33, 1, "Человек", 2, 3];
  arr.splice(3, 1);
  let sum = 0;
  for (let j = 0; j < 5; j++) {
    arr[j] = arr[j]**3;
    sum += arr[j];
  }
  console.log(Math.sqrt(sum).toFixed(3));
  //--------5--------
  let argument = 12;
      strok = "    урок 3 был слишком легким   ";
      newStrok = "";

      // переменная strokFifty просто для наглядности, отсюда скопировать лишь текст и заменить с содержанием strok, чтобы браузер не использовать
      // strokFifty = "В следующем примере метод split() ищет 0 или более пробелов, за которыми следует точка с запятой, за которой снова следуют 0 или более пробелов, и, если этот шаблон найден, удаляет пробелы из строки. Переменная nameList является массивом, возвращённым в результате работы метода split()";

      strokDot = "...";
  
  function test(arg) {
    if (typeof(arg) !== 'string') {
      console.log("Это не строка!");
    } else {
      newStrok = strok.trim();       
      if (newStrok.length < 50 && newStrok != null) {
        console.log(newStrok);        
      } else {
        newStrok = newStrok.substring(0,50);
        console.log(newStrok + strokDot);
      }

    }
  }

  test(argument);
  test(strok);  

}

main();