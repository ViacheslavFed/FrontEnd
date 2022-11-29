// 1)

// Создайте параграф и одну кнопку. 
// Добавьте стили для этих элементов 
// используя javascript.Сделайте так, 
// чтобы при клике на кнопку исчезал параграф , 
// а при повторном клике появлялся обратно.

let p = document.createElement("p");
let btn = document.createElement("button");
p.classList.add("show");

btn.innerText = "Hello";
btn.style.fontSize = "20px"
btn.style.backgroundColor = "pink";
p.style.fontSize = "30px";
p.innerText = "Hello!!!!"

document.body.append(p,btn);

btn.addEventListener("click" , () => {
    if (p.classList.contains("show")){
        p.classList.replace("show", "hide");
    }else {
        p.classList.replace("hide", "show");
    }

})




// 2

// Создайте массив, содержащий названия цветов. 
// На основе этого массива создайте список. 
// При наведении на один из пунктов должен 
// поменяться цвет фона всего документа на данный цвет.

let color = ["blue", "red", "pink", "yellow", "green", "white"]

let ul = document.createElement("ul");

for (let i = 0; i < color.length; i++) {
   let li = document.createElement("li");
    li.innerText = color[i];
    ul.append(li)

    li.onmouseover = () => {
       document.body.style.background = color[i];
    }
}
document.body.append(ul);




// 3)

// Создайте массив с Вашими любимыми фильмами. 
// Напишите цикл, который создает заголовки на основе 
// этого массива. При клике на заголовок внизу 
// появляется краткое описание данного фильма.

const movies = [
    {
     title: "Банкир (2019)",
     info: "История афроамериканских бизнес-партнеров Джо Морриса и Бернарда Гарретта, которые в 1950-х годах основали успешное агентство недвижимости. Они нанимают подставного белого руководителя компании, а сами притворяются простыми дворником и водителем. На вершине успеха над ними нависает угроза разоблачения.",
    },

    {
    title: "Остров проклятых (2010)",
    info: "Четвертая по счету работа блестящего дуэта настоящих профессионалов своего дела Мартина Скорсезе и Леонардо ДиКаприо, на этот раз в жанре мистического триллера с элементами психологической драмы, никого не оставит равнодушным. Америка середины 50-х...",
   },

   {
    title: "Начало (2010)",
    info: "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил.",
  }

];

for (let movie of movies) {
  let h = document.createElement("h2");
  h.innerText = movie.title;
  let p = document.createElement("p");
  p.innerText = movie.info;
  p.classList.add("hide");

  document.body.append(h, p);

    h.addEventListener("click" , () => {
        if (p.classList.contains("show")){
            p.classList.replace("show", "hide");
        }else {
            p.classList.replace("hide","show");
        }
    })
}




// 4)

// Клавиатура на Вашем экране! 
// Создайте кнопки(button) со всеми английскими буквами.
// Застилизуйте их так, чтобы на экране была копия 
// клавиатуры (только английские буквы, цвета и размеры 
// кнопок выбирайте на свой вкус).

const keyboard = ["q","w","e","r", "t", "y", "u", "i", 
"o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", 
"z", "x", "c", "v", "b", "n", "m"];

let p = document.createElement("p");
document.body.appendChild(p);

for (let i = 0; i < keyboard.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = keyboard[i];
    btn.style.background = "green"
    btn.style.fontSize = "33px"
    btn.style.padding = "10px 15px"
    btn.style.margin = "10px"
   
    document.body.append(btn);

    btn.onclick = () => {
        p.innerText = btn.textContent
    }
}


// Доработайте предыдущий скрипт так, чтобы при нажатии 
// на кнопку ,сверху видеть буквы, на которые нажимает 
// пользователь(имитация клавиатуры). Подсказка: можете 
// использовать параграф.