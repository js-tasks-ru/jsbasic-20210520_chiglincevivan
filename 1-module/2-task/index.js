/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (!name) return false;
  if (name.length < 4) return false;
  if (spaceCount(name) > 0) return false; 
  return true;
}

function spaceCount(_string) {
  let spaceCount = 0
  for (let char of _string) {
    if (char == ' ') spaceCount++
  }
  return spaceCount
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}