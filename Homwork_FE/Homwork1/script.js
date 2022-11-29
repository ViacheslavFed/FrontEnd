


const object = [

    {
    
    title: "BMW",
    
    price: "40000",
    
    count: "15"
    
    },
    
    {
    
    title: "Toyota",
    
    price: "20000",
    
    count: "13"
    
    },
    
    {
    
    title: "Ford",
    
    price: "30000",
    
    count: "20"
    
    },
    
    {
    
    title: "Chevrolet",
    
    price: "60000",
    
    count: "9"
    
    },
    
    {
    
    title: "Volkswagen",
    
    price: "30000",
    
    count: "13"
    
    },
    
    ]



// // 1) Создать пронумерованные списки с товарами 
// // (на основе массива с объектами);

  let ol = document.createElement('ol');

  for(let i = 0; i < object.length; i++){
    let li = document.createElement('li');
    li.innerText = object[i].title;
    ol.append(li);
  }
  document.body.append(ol);

//   // 2) Написать скрипт, который выводит списки с товарами в интерфейс 
//   // (на основе массива с объектами с прошлой задачи),
//   //  а внизу выводится итоговая сумма товаров и их количество.

  let p = document.createElement('p');

  for(let i = 0; i < object.length; i++){
    p.innerText += object[i].title;
  }
  document.body.append(p);

  let result1 = 0;
  let result2 = 0;

  for(let i = 0; i < object.length; i++){
    result1 += +object[i].price;
    result2 = result2 + +object[i].count;
  }
  document.body.append(result1+ ", " +result2);