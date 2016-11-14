var request = require('supertest');

describe('CompanyController', function() {

  describe('#create()', function() {
    it('should create a record', function (done) {
      // request(sails.hooks.http.app)
      //   .post('/companies')
      //   .send({ name: 'test'})
      //   .expect(302)

      Company.create({ name: 'test'})
      .then(function(results) {
        console.log(results);
        done();
      })
      .catch(done);
    });
  });

});