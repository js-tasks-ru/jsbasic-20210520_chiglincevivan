function makeDiagonalRed(table) {
  const y = table.rows.length; // количество строк

  // высчитываем количество ячеек в строках
  const _arr = [];
  for (i = 0; i < y; i++){
    _arr.push(table.rows[i].cells.length);
  }
  const x = Math.min(..._arr); // количество стоблцов

  const minXY = Math.min(x, y); 
  
  for (i = 0; i < minXY; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
