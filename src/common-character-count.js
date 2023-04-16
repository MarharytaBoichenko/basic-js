const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let arrOfSameChars = []
  let s1arr = [...s1]
  let s2arr = [...s2]
  for (let i = 0; i < s1arr.length; i++){
console.log(s1[i]);
    for (let j = 0; j < s2arr.length; j++){
      console.log(s2[j] === s1arr[i])
      if (s2arr[j] === s1arr[i]) {
        arrOfSameChars.push(s1arr[i]) 
        //this el s2[j] we  should not check once more
        s2arr.splice(j, 1)
        break
      }
      console.log(arrOfSameChars)
    }
   
  }
    console.log(arrOfSameChars.length);
   return arrOfSameChars.length
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
