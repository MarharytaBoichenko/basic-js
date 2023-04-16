const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arrOfStringsEl = []
  if (!members) return false;
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] != 'string') {
      continue
    } else {
      console.log(members[i])
      arrOfStringsEl.push(members[i].toUpperCase().split(" ").join('').charAt(0))
    }
  }
  console.log(arrOfStringsEl);
  console.log(  arrOfStringsEl.sort((a, b) => a.localeCompare(b)).join(''))
 return arrOfStringsEl.sort((a, b) => a.localeCompare(b)).join('')
}

module.exports = {
  createDreamTeam
};
