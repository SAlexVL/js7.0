// берем главную кнопку
let begPay = document.getElementById('start'),
// берем из result-table
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
// псевдомассив для обязательных расходов
    expensesItem = document.querySelectorAll('.expenses-item'),
// псевдомассив для остальных кнопок
    btn = document.getElementsByTagName('button'),
// массив имен кнопок
    masName = ["expensesItemBtn", "optionalexpensesBtn", "countBudgetBtn"];    
// разнес каждой кнопке свою переменную
    for (let i = 0; i < btn.length - 1; i++) {
        masName[i] = btn[i];
    }
// псевдомассив для необязательных расходов
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
// оставшиеся элементы
    chooseIncome = document.querySelector('.choose-income'),
    savingsCh = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
  // переменные для start
  let money, time; 
   // кнопка начать расчет  
  begPay.addEventListener('click', function() {
    for (let i = 0; i < btn.length - 1; i++) {
      masName[i].disabled = false;
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-29");   
    money = +prompt("Введите свой месячный бюджет", 1000);
   // если money пусто
    while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Введите свой месячный бюджет", 1000);
    }
   // если time пусто
    if (time == "") {
      time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-29"); 
    }
   // раскидываем дату
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
  });
    // обязательные расходы 
    masName[0].addEventListener('click', function() {
        var sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let catalog = expensesItem[i].value,
                cost = expensesItem[++i].value;
      
            if ( (typeof(catalog)) === 'string' && (typeof(catalog)) != null && (typeof(cost)) != null
                && catalog != '' && cost != '' && catalog.length < 50) {
                appData.expenses[catalog] = cost;
                sum += +cost;
                masName[0].disabled = false;
            } else if (catalog == '' || cost == '') {              
                masName[0].disabled = true;
              } 
          }        
          expensesValue.textContent = sum;
          appData.sumBudg = sum;
    });
    // необязательные расходы 
    masName[1].addEventListener('click', function() {
      for (let i = 0; i < optionalexpensesItem.length; i++) {
        let catalog = optionalexpensesItem[i].value;
  
        if ( (typeof(catalog)) === 'string' && catalog.length < 50) {
            appData.expenses[i+1] = catalog;
            optionalexpensesValue.textContent += appData.expenses[i+1] + ' '; 
        } else if(optionalexpensesValue == '') {
          masName[1].disabled = true;
        } else {
            alert("Проверьте вводимые поля!!!"); 
          }  
      }
    });
    // расчет дневного дохода
    masName[2].addEventListener('click', function() {
      if (appData.budget != undefined) {
          appData.moneyPerDay = ((appData.budget-appData.sumBudg) / 30).toFixed(); 
          daybudgetValue.textContent = appData.moneyPerDay;
  
          if(appData.moneyPerDay < 30 && appData.moneyPerDay != 0) {
            levelValue.textContent = "Исходя из месячной суммы дохода у вас минимальный уровень достатка!";
          } else if (appData.moneyPerDay > 30 && appData.moneyPerDay < 100) {
            levelValue.textContent = "Исходя из месячной суммы дохода у вас средний уровень достатка!";
            } else if (appData.moneyPerDay > 100) {
            levelValue.textContent = "Исходя из месячной суммы дохода у вас высокий уровень достатка!";
              } else {
            levelValue.textContent = "Вы где-то ошиблись!!! Пересмотрите вводимые данные!";
                }
      } else {
        daybudgetValue.textContent = "Произошла ошибка!";
      }
    });
    // возможный доход 
    chooseIncome.addEventListener('input', function() {
      let items = chooseIncome.value;
      appData.income = items.split(', ');
      incomeValue.textContent = appData.income;
    });
    // check - box 
    savingsCh.addEventListener('click', function() {
      if (appData.savings == true) {
        appData.savings = false;
      } else {
        appData.savings = true;
      }
    });
    // расчет накоплений ->
    chooseSum.addEventListener('input', function() {
      if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;   
        appData.yearIncome = sum/100*percent;  

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });
    // -> с учетом процентов
    choosePercent.addEventListener('input', function() {
      if (appData.savings == true) {
          let sum = +chooseSum.value,
              percent = +choosePercent.value;

          appData.monthIncome = sum/100/12*percent;    
          appData.yearIncome = sum/100*percent;  

          monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
          yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
      }
    });

   // объект для chooseExpenses() 
   var appData = {
    budget: money,
    timeData: time,
    sumBudg: sum,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings: false
  };   