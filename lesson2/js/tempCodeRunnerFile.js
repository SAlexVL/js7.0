    /* Это цикл for!!!  */
        for (let i = 0; i < 2; i++) {
          let catalog = [prompt("Введите обязательную статью расходов в этом месяце", "молоко")],
              cost = [prompt("Во сколько обойдется?", 100)];

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