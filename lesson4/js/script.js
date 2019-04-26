function main() {
  'use strict';

  // переменные для start()
  let money, time; 
   // начальные вопросы   
  function start() {
      money = +prompt("Введите свой месячный бюджет", 1000);
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20");

      while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите свой месячный бюджет", 1000);
      }
  } 
  start();
   // объект для chooseExpenses() 
   var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: true,
    chooseExpenses: function() {
      for (let i = 0; i < 2; i++) {
        let catalog = prompt("Введите обязательную статью расходов в этом месяце", "молоко"),
            cost = prompt("Во сколько обойдется?", 100);
  
        if ( (typeof(catalog)) === 'string' && (typeof(catalog)) != null && (typeof(cost)) != null
            && catalog != '' && cost != '' && catalog.length < 50) {
            appData.expenses[catalog] = cost;
        } else {
            i--;  
          }  
      }
    },
    detectDayBudget: function() {
      appData.moneyPerDay = appData.budget / 30; 
      document.getElementById("demo").innerHTML = "За окном " + appData.timeData;
      document.getElementById("demo2").innerHTML = "Бюджет на текущий месяц составляет " + appData.budget + "$";
      document.getElementById("demo3").innerHTML = "А бюджет на один день должен составить " + appData.moneyPerDay.toFixed(2) + "$";
    },
    detectLevel: function() {
      if(appData.moneyPerDay < 30 && appData.moneyPerDay != 0) {
        document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас минимальный уровень достатка!";
      } else if (appData.moneyPerDay > 30 && appData.moneyPerDay < 100) {
        document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас средний уровень достатка!";
        } else if (appData.moneyPerDay > 100) {
        document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас высокий уровень достатка!";
          } else {
        document.getElementById("demo4").innerHTML = "Вы где-то ошиблись!!! Пересмотрите вводимые данные!";
            }
    },
    checkSavings: function() {
      if (appData.savings == true) {
        let save = +prompt("какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        document.getElementById("demo5").innerHTML = "Доход в месяц с вашего депозита составит " + appData.monthIncome.toFixed(2) + "$";    
      }
    },
    chooseOptExpenses: function() {
      for (let i = 0; i < 3; i++) {
        let catalog = prompt("Введите статью необязательных расходов в этом месяце", "кино");
  
        if ( (typeof(catalog)) === 'string' && catalog.length < 50) {
            appData.expenses[i+1] = catalog;
        } else {
            i--;  
          }  
      }
    },
    chooseIncome: function() {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
      if ( typeof(items) === 'string' && items != '') {   // Проверка строки на содержание (1 задание)
            appData.income = items.split(', ');
            appData.income.push(prompt("может что-то еще?"));
            appData.income.sort();
      }  else {                                            // Если неверно, то повторяем ввод (1 задание)
        alert("Вы  ввели неверные данные, попробуйте снова");
        while (items == null || items == '') {
          items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
      }
      // вывод на экран Способы доп. заработка (2 задание)
      appData.income.forEach(function(items, i) {
      alert("Способы доп. заработка: " + (i+1) + "." + items);        
      });
    }
  };  

  // console.log(appData);
  // console.log(appData.chooseIncome());

      for (let key in appData) {
        console.log('Наша программа включает в себя данные:' + key + ' имеет значение ' + appData[key]);
      }

}
main();