window.addEventListener('DOMContentLoaded', function() {
 
  'use strict';

  let times = document.querySelector('.time');

  function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    // форматировать дату, с учетом того, что месяцы начинаются с 0
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes(),
      '0' + d.getSeconds()
    ];

    for (let i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }

  // день недели на русском
  function getWeekDay(date) {
    let dayWeek = document.querySelector('.day'),
        dayRus = new Date(d[2], (d[1] - 1), d[0] - 1);
    
    dayWeek.textContent = "Сегодня " + dayRus.toLocaleString('ru', {weekday: 'long'});
  }
  getWeekDay();

    return d.slice(3).join(':') + ' ' + d.slice(0, 3).join('.');
  }

  // изменение в реальном времени каждую секунду
  let time = setInterval(function() {
    times.textContent = formatDate(new Date(new Date));
  }, 1000);

  // разница дней между датами
  function countDay() {
    let dateAll = document.querySelectorAll('.date-b');

    let beginD = new Date(dateAll[0].value);
    let endD = new Date(dateAll[1].value);
    
    dateAll[2].value =Math.abs( (beginD - endD) / (60*60*24*1000) );
  }
  countDay();
});