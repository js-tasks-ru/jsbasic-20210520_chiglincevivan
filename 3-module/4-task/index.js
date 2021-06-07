function showSalary(users, age) {
  // let newarr = users.filter(_obj => _obj['age'] <= age);
  // let newarr2 = newarr.map(_obj => `${_obj['name']} ${_obj['balance']}`);
  // let final = newarr2.join('\n');
  // return final

  return(users
    .filter(_obj => _obj['age'] <= age)
    .map(_obj => `${_obj['name']}, ${_obj['balance']}`)
    .join('\n'))
}



// // for glory of test
// let user1 = {"balance": "$1,825.65", "age": 21, "name": "Golden Branch",};
// let user2 = {"balance": "$23", "age": 12, "name": "Amu What",};
// let user3 = {"balance": "$0.65", "age": 43, "name": "Ilan Who",};

// // Массив пользователей
// let users = [user1, user2, user3]

// console.log(showSalary(users, 5));
// console.log('-----\n')
// console.log(showSalary(users, 40));
