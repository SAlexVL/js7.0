  let argument = 12;
      strok = "  В следующем примере метод split() ищет 0 или более пробелов, за которыми следует точка с запятой, за которой снова следуют 0 или более пробелов, и, если этот шаблон найден, удаляет пробелы из строки. Переменная nameList является массивом, возвращённым в результате работы метода split(   ";
      newStrok = "";
//     strokFifty = "В следующем примере метод split() ищет 0 или более пробелов, за которыми следует точка с запятой, за которой снова следуют 0 или более пробелов, и, если этот шаблон найден, удаляет пробелы из строки. Переменная nameList является массивом, возвращённым в результате работы метода split()";
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