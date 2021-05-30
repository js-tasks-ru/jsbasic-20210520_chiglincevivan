function sumSalary(salaries) {
  let salary = 0;

  for (let _obj in salaries) {
    if (isPositiveNumber(salaries[_obj])) salary += salaries[_obj]
  }
  return salary;
}

function isPositiveNumber(_num) {
  if (_num == NaN) return false
  if (_num == Infinity) return false
  if (_num > 0) return true
  else return false
}