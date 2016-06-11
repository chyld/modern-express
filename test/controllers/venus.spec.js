const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../dst/server');

describe('venus', () => {
  describe('get /venus/apogee', () => {
    it('should do a lot of async', (done) => {
      request(app)
      .get('/venus/apogee')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});
