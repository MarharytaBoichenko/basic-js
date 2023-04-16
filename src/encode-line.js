const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 
function encodeLine( str) {
  let count = 1;
  let resultArr = []
  
  for (let i = 0; i < str.length; i++){
    console.log(str[i])
    if (str[i]=== str[i+1]) {
      console.log(' again letter')
      count +=1
    } else {
     resultArr.push([count,str[i]])
      console.log(resultArr)
      count =1
        console.log(resultArr);
    }
  }
  console.log(resultArr.flat().filter(el=> el !== 1).join(''));
  return resultArr.flat().join('').replace(/1/g, '')
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
