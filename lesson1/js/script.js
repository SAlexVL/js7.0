function main() {
  'use strict';

  let money = prompt("Введите свой месячный бюджет", "");
  let time = prompt("Введите дату в формате YYYY-MM-DD", "");
  let catalog = prompt("Введите через запятую список обязательных расходов", "");
  let cost = prompt("Введите затраты на обязательные расходы", "");  
  let income = [];

  let appData = {
    budget: money,
    timeData: time,
    expenses: {
      roster: catalog,
      val: cost
    },
    optionalExpenses : {},
    spinOff: income,
    savings: false
  };

  document.getElementById("demo").innerHTML = "Месячный бюджет составляет " + appData.budget + "$";
  document.getElementById("demo2").innerHTML = "Сегодняшняя дата: " + appData.timeData;
  document.getElementById("demo3").innerHTML = "Если на обязательные расходы ( " + appData.expenses.roster + " ) потратить " + appData.expenses.val + "$, то оставшаяся до зарплаты сумма составит " + (appData.budget - appData.expenses.val) +"$!!!";  
  document.getElementById("demo4").innerHTML = "А значит бюджет на один день должен составить " + ((appData.budget - appData.expenses.val) / 30) + "$";
}

main();