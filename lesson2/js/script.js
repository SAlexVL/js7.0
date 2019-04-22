function main() {
  'use strict';

    let money = +prompt("Введите свой месячный бюджет", 1000),
        time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20"),
        income = [];

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses : {},
        spinOff: income,
        savings: false
    };

    /* Это цикл for!!!  */
    let catalog = [prompt("Введите обязательную статью расходов в этом месяце", "молоко"), prompt("Введите обязательную статью расходов в этом месяце", "хлеб")],
        cost = [prompt("Во сколько обойдется?", 100), prompt("Во сколько обойдется?", 80)];

        for (let i = 0; i < 2; i++) {
            catalog[i];
            cost[i];

          if ((typeof(catalog[i])) === 'string' && (typeof(catalog[i])) != null && (typeof(cost[i])) != null
              && catalog[i] != '' && cost[i] != '' && catalog[i].length < 50) {
              console.log("done!!!");
              appData.expenses[catalog[i]] = cost[i];
          } else {
            i = i - 1;
            // alert("Вы либо не ввели данные либо ввели не правильно! проверьте и попробуйте снова! ");
            //     catalog[i+2] = prompt("Введите обязательную статью расходов в этом месяце", "мясо"); 
            //     cost[i+2] = prompt("Во сколько обойдется?", 200);    
            //   appData.expenses[catalog[i+2]] = cost[i+2];   
          }  
    }

    /* это цикл while предусловие */
    // let i = 0;
    // while (i < 2) {
    //   let catalog = [prompt("Введите обязательную статью расходов в этом месяце", "молоко")],
    //       cost = [prompt("Во сколько обойдется?", 100)];

    //   if ((typeof(catalog[i])) === 'string' && (typeof(catalog[i])) != null && (typeof(cost[i])) != null
    //       && catalog[i] != '' && cost[i] != '' && catalog[i].length < 50) {
    //       console.log("done!!!");
    //       appData.expenses[catalog[i]] = cost[i];
    //   } else {
    //        i = i - 1;
    //   }  
    //   i++;
    // }

    /* это цикл do постусловие*/
    // let i = 0;  
    // do {
    //   let catalog = [prompt("Введите обязательную статью расходов в этом месяце", "молоко")],
    //       cost = [prompt("Во сколько обойдется?", 100)];

    //   if ((typeof(catalog[i])) === 'string' && (typeof(catalog[i])) != null && (typeof(cost[i])) != null
    //       && catalog[i] != '' && cost[i] != '' && catalog[i].length < 50) {
    //       console.log("done!!!");
    //       appData.expenses[catalog[i]] = cost[i];
    //   } else {
    //        i = i - 1;
    //   }
    //   i++;
    // }
    // while (i <= 1);    

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
}

  main();