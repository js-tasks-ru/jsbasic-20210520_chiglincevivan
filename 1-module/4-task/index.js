let blackList = ['XXX', '1xBet']

function checkSpam(str) {
  for (i = 0; blackList[i]; i++) {
    let blackListedKey = (blackList[i].toLowerCase());

    if (str.toLowerCase().includes(blackListedKey)) return true
    else continue;
  }
  return false;
}