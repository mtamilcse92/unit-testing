describe('CompanyModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Company.find()
      .then(function(results) {
        console.log(results);
        done();
      })
      .catch(done);
    }); 
  });

});