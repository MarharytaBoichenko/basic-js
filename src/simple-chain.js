const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length)
  return this
    // remove line with error and write your code here
  },
  addLink(value) {
    console.log(value);
    let elem;
    if (value === undefined) {
      elem = `( )`
    } else {
      elem = `( ${value} )`
    }
    console.log(elem)
     this.chain.push(elem)
    return this
    // remove line with error and write your code here
  },
  removeLink(position) {
   if (position <= 0 || position > this.chain.length || typeof (position) !== 'number' || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this
   
    // remove line with error and write your code here
  },
  finishChain() {
    let newChain = [...this.chain]
    this.chain =[]
    return newChain.join('~~')
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
