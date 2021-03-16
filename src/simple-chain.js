const CustomError = require("../extensions/custom-error");
let res = "";
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("( " + String(value) + " )");
    return this;
  },
  removeLink(position) {
    if (!position) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    res = this.chain.join("~~");
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
