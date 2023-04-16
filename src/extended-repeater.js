const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultArr = []
  let addPart = []

  if (!options) {
    return str?.toString()
  }

  if (options?.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      console.log(options?.addition?.toString());
      addPart.push(options?.addition + '')
    }
  }
  else {
    console.log("no  addsep")
    // console.log((options.addition + '') === true);
    // console.log(options?.addition === true);
    options.addition !== undefined ? addPart.push(options?.addition + '') : addPart = []
    // addPart.push(options?.addition + '')
    console.log(addPart)
   
}
 const addSep = options?.additionSeparator || '|'
  const part = addPart.join(addSep)
  console.log(part);

  console.log(str)

  if (options?.repeatTimes) {

  for (let j = 0; j < options.repeatTimes; j++){
    resultArr.push(str + "" +part)
  }  
  } else {
    resultArr.push(str + "" +part)
  }
console.log(resultArr)
  const sep =options?.separator || '+'
  
  const  res = resultArr.join(sep)
  console.log(res)
  // ((str + (addition * additionRepeatTimes) join('additionSeparator') )*repeatTimes ) join('separator')
return res
}

module.exports = {
  repeater
};
