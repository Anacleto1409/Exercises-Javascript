function palindrome(str) {
  str=str.match(/[a-z0-9]/ig);
  let string= str.join('').toLowerCase();
  let reverseString = str = str.reverse().join('').toLowerCase();

  if(string === reverseString)
  return true;

  return false
}

palindrome("eye");