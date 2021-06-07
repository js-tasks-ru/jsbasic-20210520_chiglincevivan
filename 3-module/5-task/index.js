function getMinMax(str) {
  const _arr = (str
    .split( /\,|\s/ ) // запятая или пробел // ps: очень долго искал решение
    .map( _obg => Number(_obg) )
    .filter( _obj => typeof(_obj) === 'number' && isFinite(_obj) ));
  
  const maxNumOfArr = Math.max(..._arr);
  const minNumOfArr = Math.min(..._arr);

  return { 'min': minNumOfArr, 'max': maxNumOfArr }
}
