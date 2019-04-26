function main() {
  'use strict';

  // --------1---------
  let str = "урок-3-был слишком легким",
  newStr = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(newStr);
  // --------2--------
  let replaceStr = newStr.replace(/-/g, ' ');
  console.log(replaceStr);
  // --------3--------
  let newNewStr = str.slice(str.indexOf("легким")).replace("им", "оо");
  console.log(newNewStr);
  //--------4--------
  let arr = [20, 33, 1, "Человек", 2, 3];
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (!isNaN(arr[j])) {
      sum += Math.pow(arr[j],3);
    }
  }
  console.log(Math.sqrt(sum).toFixed(3));
  //--------5--------
  let argument = 12,
      strok = "   В следующем примере метод split() ищет 0 или более пробелов, за которыми следует точка с запятой, за которой снова следуют 0 или более пробелов, и, если этот шаблон найден, удаляет пробелы из строки. Переменная nameList является массивом, возвращённым в результате работы метода split()   ",
      newStrok = "",

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