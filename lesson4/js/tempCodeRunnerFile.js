    chooseIncome: function() {
      // let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      items = null;
      if (typeof(items) === 'string' && items != null) {
            appData.income = items.split(', ');
            // appData.income.push(prompt("может что-то еще?"));
            appData.income.sort();
      }  else {
        console.log("Вы  ввели неверные данные, попробуйте снова");
        // items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      }
    }