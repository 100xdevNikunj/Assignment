/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function removeSpacesAndPunctuation(str) {
  // Use a regular expression to match spaces and punctuation signs
  const regex = /[^\w]/g; // \w matches any alphanumeric character or underscore
  return str.replace(regex, ''); // Replace matched characters with an empty string
}

function isPalindrome(str) {
  const lower = removeSpacesAndPunctuation(str.toLowerCase());
  console.log("lower; ", lower)
  const l = lower.length;

  for(let i=0,j=l-1;i<l/2;i++,j--){
    if(lower.charAt(i)!=lower.charAt(j)) return false;
  }

  return true;
}

module.exports = isPalindrome;
