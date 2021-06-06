// function namify(users) {
//   const arr = [];
//   for (_obj of users) {
//     arr.push(_obj['name']);
//   }
//   return arr
// }


// function namify(users) {
//   const arr = [];
//   users.forEach(_obj => arr.push(_obj['name']));
//   return arr
// }


// function namify(users) {
//   return users.map(user => user['name'])
// }

function namify(users) {
  return users.reduce((arr, _user) => arr.concat(_user['name']), [])
}

// for glory of test
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [ vasya, petya, masha ];

// console.log(namify(users))