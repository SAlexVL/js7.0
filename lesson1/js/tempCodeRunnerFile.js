  let money = prompt("Введите свой месячный бюджет", 1000),
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-20"),
      catalog1 = [prompt("Введите через запятую список обязательных расходов", "молоко"), 
      catalog2 = prompt("Введите через запятую список обязательных расходов", "чай")],
      cost1 = [prompt("Введите затраты на обязательные расходы", 100), 
      cost2 = prompt("Введите затраты на обязательные расходы", 150)],
      income = [];

  let appData = {
      budget: money,
      timeData: time,
      expenses: {},
      optionalExpenses : {},
      spinOff: income,
      savings: false
  };

  appData.expenses[catalog1] = cost1;
  appData.expenses[catalog2] = cost2;

  console.log(appData);