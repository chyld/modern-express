const expect = require('chai').expect;
const math = require('../../dst/math/math');

describe('math', () => {
  describe('.sum', () => {
    it('should sum up 2 numbers', () => {
      const result = math.sum(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe('.random', () => {
    it('should give a random number', () => {
      const result = math.random(5, 10);
      expect(result).to.be.within(5, 10);
    });
  });
});
