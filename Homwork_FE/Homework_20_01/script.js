

                //  Задача 1 

// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:

let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
    ] 
    // Результат: ['Home','About','FAQ','Contacts']
    
    console.log(elems.map((e)=>e.replace('<div><p class="text">',"" ).replace('</p></div>',"" )));
    
    // --------------------------------------------------------
    
                    // Задача 2 
    
    //Напишите функцию initCap(array), которая получает массив 
    // с элементами строкового значения и возвращает элементы 
    // с заглавной первой буквой по примеру: 
    
    let words = ['стакан','молоко','табуретка','вода'] 
    
    // Результат: ['Cтакан','Молоко','Табуретка','Вода']
    
    function initCap(){
    const newArr = words.map(el => el[0].toUpperCase() + el.slice(1));
        console.log(newArr);
        }
        initCap()  

        // -------------------------------------------------


                // Задача 3

        // Задан массив names. 
// Сформируйте новый массив full_names, 
// элементы которого будут содежрать вложенный 
// массив с именем и фамилией. 
// Если фамилии не окажется - второй элемент 
// должен хранить undefined 

let names = [ 
    'Steven King', 
    'Jonh Snow', 
    'Oliver', 
    'Neena Stich',
    'Grant Laster', 
    'Persius Master', 
    'Lest' 
] 

// Результат: [ 
//     ['Steven','King'], 
//     ['Jonh','Snow'], 
//     ['Oliver', undefined], 
//     ['Neena','Stich'], 
//     ['Grant','Laster'], 
//     ['Persius','Master'],
//     ['Lest', undefined] ]
    

// Решение 1

const full_names = []
for (let elem of names){
    let elem_array = elem.split(' ')
    if (elem_array.length == 2){
        full_names.push(elem_array)
    } else if (elem_array.length == 1){
        elem_array.push(undefined)
        full_names.push(elem_array)
    }
}
    
console.log(full_names)


//  Решение 2

const full_names2 = names.map(elem => {
    if (elem.includes(' ')) {
      return elem.split(' ');
    } else {
      return [elem, undefined];
    }
  }); 

console.log(full_names2);

// Решение 3

const full_names3 = names.map((el) =>
	el.includes(' ') ? el.split(' ') : [el,undefined]
);

console.log(full_names3)