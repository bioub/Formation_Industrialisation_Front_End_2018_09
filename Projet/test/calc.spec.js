const expect = require('chai').expect;
const assert = require('chai').assert;

function sum(a, b) {
  return Number(a) + Number(b);
}

function substract(a, b) {
  return a - b;
}

describe('Calc functions', function () {

  describe('sum function', function () {

    it('should return 3 when called with 1 and 2', function () {

      // TDD style
      assert.strictEqual(sum(1, 2), 3);

      // BDD style (style phrasé)
      expect(sum(1, 2)).to.be.equals(3);
      expect(sum('1', '2')).to.be.equals(3);

    });

  });

});
