const reverse = (string) => {
  const sLength = string.length;
  let reversed = '';
  for( let i = sLength; i >= 0; i-- ) {
    reversed += string.substr(i,1);
  }
  return reversed;
}

const isPalindrome = (string) => {
  if(string === reverse(string)) {
    console.log(`True: ${reverse(string)}`);
  } else {
    console.log(`False: ${reverse(string)}`);
  }
}

isPalindrome('aka');