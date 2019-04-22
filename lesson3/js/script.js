function main() {
  'use strict';

  let money, time;

  function start() {
      money = +prompt("Введите свой месячный бюджет", 1000);
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20");

      while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите свой месячный бюджет", 1000);
      }
  }
  start();

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses : {},
        income: [],
        savings: true
    };

    function chooseExpenses() {
      for (let i = 0; i < 2; i++) {
        let catalog = prompt("Введите обязательную статью расходов в этом месяце", "молоко"),
            cost = prompt("Во сколько обойдется?", 100);

        if ( (typeof(catalog)) === 'string' && (typeof(catalog)) != null && (typeof(cost)) != null
            && catalog != '' && cost != '' && catalog.length < 50) {
            console.log("done!!!");
            appData.expenses[catalog] = cost;
        } else {
          i--;  
        }  
      }
    }
    chooseExpenses();

    console.log(appData);

    appData.moneyPerDay = appData.budget / 30;

    document.getElementById("demo").innerHTML = "Месячный бюджет составляет " + appData.budget + "$";
    document.getElementById("demo2").innerHTML = "Сегодняшняя дата: " + appData.timeData;
    document.getElementById("demo3").innerHTML = "А значит бюджет на один день должен составить " + appData.moneyPerDay.toFixed(2) + "$";

    if(appData.moneyPerDay < 30 && appData.moneyPerDay != 0) {
      document.getElementById("demo4").innerHTML = "У вас минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 30 && appData.moneyPerDay < 100) {
      document.getElementById("demo4").innerHTML = "У вас средний уровень достатка!";
    } else if (appData.moneyPerDay > 100) {
      document.getElementById("demo4").innerHTML = "У вас высокий уровень достатка!";
    } else {
      document.getElementById("demo4").innerHTML = "Вы где-то ошиблись!!! Пересмотрите вводимые данные!";
    }

    function checkSavings() {
        if (appData.savings == true) {
          let save = +prompt("какова сумма накоплений?"),
              percent = +prompt("Под какой процент?");

          appData.monthIncome = save/100/12*percent;
          alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    }
    checkSavings();

}

  main();