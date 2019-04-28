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