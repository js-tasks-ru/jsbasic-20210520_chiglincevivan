function camelize(str) {
  let arr = str.split('-');
  // console.log(arr);
  if (arr.length < 2) return str
  for(i = 1; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i]) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
      // console.log(arr[i]);
    }
  }
  return arr.join('')
}


// console.log(camelize('backgroundcolor'));
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));
// console.log(camelize('-we---------bkit--transition'));