function ucFirst(str) {
  if (str.length == 0) return '';
  if (str.length == 1) return str[0].toUpperCase();
  if (str.length > 0 && str[0]) return str[0].toUpperCase() + str.slice(1);
}