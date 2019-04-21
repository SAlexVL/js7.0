function main() {
  'use strict';

  let money = prompt("Введите свой месячный бюджет", 1000),
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20"),
      catalog = [prompt("Введите обязательную статью расходов в этом месяце", "молоко"), prompt("Введите обязательную статью расходов в этом месяце", "чай")],
      cost = [prompt("Во сколько обойдется", 100), prompt("Во сколько обойдется", 150)],
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

  // console.log(appData);
  // console.log(appData.budget / 30);

  document.getElementById("demo").innerHTML = "Месячный бюджет составляет " + appData.budget + "$";
  document.getElementById("demo2").innerHTML = "Сегодняшняя дата: " + appData.timeData;
  document.getElementById("demo4").innerHTML = "А значит бюджет на один день должен составить " + (appData.budget / 30).toFixed(2) + "$";

}

main();