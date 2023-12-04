/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const countchar = (str) => {
    const charcount = {};
    for (let char of str){
      char = char.toLowerCase();
      if (char !== ' ') { 
        charcount[char] = (charcount[char] || 0) + 1
      }
    }
    return charcount;
  }

  const charCount1 = countchar(str1);
  const charCount2 = countchar(str2);

  if(Object.keys(charCount1).length != Object.keys(charCount2).length){
    return false;
  }

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
