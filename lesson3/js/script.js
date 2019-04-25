function main() {
  'use strict';

  // переменные для start()
  let money, time, numberObl, numberNotObl; 
   // начальные вопросы   
  function start() {
      money = +prompt("Введите свой месячный бюджет", 1000);
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20");
      numberObl = +prompt("Введите количество позиций обязательных расходов в чеке на сегодня", 2);
      numberNotObl = +prompt("Введите количество позиций необязательных расходов в чеке на сегодня", 3);

      while(isNaN(money) || isNaN(numberObl) || isNaN(numberNotObl) || money == "" || numberObl == "" || numberNotObl =="" 
        || money == null || numberObl == null || numberNotObl == null) {
        money = +prompt("Введите свой месячный бюджет", 1000);
        numberObl = +prompt("Введите количество позиций обязательных расходов в чеке на сегодня", 2);
        numberNotObl = +prompt("Введите количество позиций необязательных расходов в чеке на сегодня", 3);
      }
  } 
  start();
   // объект для chooseExpenses() 
   let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: true
  };  
   // дневной обязательный чек
  function chooseExpenses() {
    for (let i = 0; i < numberObl; i++) {
      let catalog = prompt("Введите обязательную статью расходов в этом месяце", "молоко"),
          cost = prompt("Во сколько обойдется?", 100);

      if ( (typeof(catalog)) === 'string' && (typeof(catalog)) != null && (typeof(cost)) != null
          && catalog != '' && cost != '' && catalog.length < 50) {
          appData.expenses[catalog] = cost;
      } else {
          i--;  
        }  
    }
  }
  chooseExpenses();

  console.log(appData);

   // дневной необязательный чек
   function chooseOptExpenses() {
    for (let i = 0; i < numberNotObl; i++) {
      let catalog = prompt("Введите статью необязательных расходов в этом месяце", "кино");

      if ( (typeof(catalog)) === 'string' && catalog.length < 50) {
          appData.expenses[i+1] = catalog;
      } else {
          i--;  
        }  
    }
  }
  chooseOptExpenses();  

   // переменная для дневного бюджета
   appData.moneyPerDay = appData.budget / 30;      
   // Вывод на страницу detectDayBudget()
  function detectDayBudget() {
    document.getElementById("demo").innerHTML = "За окном " + appData.timeData;
    document.getElementById("demo2").innerHTML = "Бюджет на текущий месяц составляет " + appData.budget + "$";
    document.getElementById("demo3").innerHTML = "А бюджет на один день должен составить " + appData.moneyPerDay.toFixed(2) + "$";
  }
  detectDayBudget();
   // Вывод на страницу detectLevel()  
  function detectLevel() {
    if(appData.moneyPerDay < 30 && appData.moneyPerDay != 0) {
      document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 30 && appData.moneyPerDay < 100) {
      document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас средний уровень достатка!";
      } else if (appData.moneyPerDay > 100) {
      document.getElementById("demo4").innerHTML = "Исходя из месячной суммы дохода у вас высокий уровень достатка!";
        } else {
      document.getElementById("demo4").innerHTML = "Вы где-то ошиблись!!! Пересмотрите вводимые данные!";
          }
  }
  detectLevel();
   // расчет депозита
  function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        document.getElementById("demo5").innerHTML = "Доход в месяц с вашего депозита составит " + appData.monthIncome.toFixed(2) + "$";    
    }
  }
  checkSavings();

}
main();