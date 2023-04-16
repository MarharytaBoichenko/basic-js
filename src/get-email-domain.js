const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [...email]
  let index =0
  arr.find((el, idx) => {
    console.log(el)
    console.log(idx);
    console.log(el === '@', idx);
    if (el === '@') {
    index = idx
    }
  })
  console.log(index)
  return arr.splice(index +1).join('')
}

module.exports = {
  getEmailDomain
};
