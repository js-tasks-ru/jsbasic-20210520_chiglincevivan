/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {

  }
}

let rows = [
  {
      name: 'Вася',
      age: 25,
      salary: 1000,
      city: 'Самара'
  },
  {
      name: 'Петя',
      age: 30,
      salary: 1500,
      city: 'Москва'
  }
];

// table 
// tr
// td name
// td age
// td salary
// td city
// td button


const newMap = rows
  .map(element => `<tr><td>${element.name}</td><td>${element.age}</td><td>${element.salary}</td><td>${element.city}</td><td><button>X</button></td></tr>`).join('');


document.body.insertAdjacentHTML('beforeend', `<table>${newMap}</table>`);