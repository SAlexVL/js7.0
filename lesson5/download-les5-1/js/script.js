// наводим порядок в menu-item
let headMen = document.querySelector('.menu'),
    menIt = document.querySelectorAll('.menu-item');
    menIt[1].innerHTML = "Второй пункт";
    menIt[2].innerHTML = "Третий пункт"; 

// создаем 5 пункт
    listN = document.createElement('li');
    listN.classList.add('menu-item');
    listN.innerHTML = "Пятый пункт";
    headMen.appendChild(listN);

// меняем фоновую картинку
let backgr = document.querySelector('body');
    backgr.style.backgroundImage = "url('img/apple_true.jpg')";

// удаляем рекламу
let parRekl = document.querySelector('.adv');
    parRekl.remove();
// меняем title
let titles = document.getElementById('title');
    titles.innerHTML = "Мы продаем только подлинную технику Apple";   
// вопрос юзеру    
let relat = prompt("Каково ваше отношение к технике Apple?", "Норм!)"),
    promptPage = document.getElementById('prompt'); 
    promptPage.innerHTML = relat;   