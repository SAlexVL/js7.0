function main() {
  'use strict';

  let money = prompt("Введите свой месячный бюджет", 1000),
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20"),
      catalog = [prompt("Введите через запятую список обязательных расходов", "молоко"), prompt("Введите через запятую список обязательных расходов", "чай")],
      cost = [prompt("Введите затраты на обязательные расходы", 100), prompt("Введите затраты на обязательные расходы", 150)],
      income = [];

  let appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses : {},
      spinOff: income,
      savings: false
  };

  appData.expenses[catalog[0]] = cost[0];
  appData.expenses[catalog[1]] = cost[1];

  console.log(appData);
  console.log(appData.budget / 30);

  // document.getElementById("demo").innerHTML = "Месячный бюджет составляет " + appData.budget + "$";
  // document.getElementById("demo2").innerHTML = "Сегодняшняя дата: " + appData.timeData;
  // document.getElementById("demo3").innerHTML = "Тогда обязательные расходы -> " + appData.expenses.catalog + " : " + appData.expenses.cost;  
  // document.getElementById("demo4").innerHTML = "А значит бюджет на один день должен составить " + ((appData.budget - appData.expenses.cost) / 30) + "$";

}

main();