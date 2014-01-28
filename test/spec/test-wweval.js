describe('wweval', function() {

  it('should be defined', function() {
    expect(wweval).to.be.ok;
  });

  it('should evaluate correctly', function(done) {
    wweval('1 + 2', function(result) {
      expect(result).to.equal(3);
      done();
    });
  });

  it('should handle multiple expressions simultaneously', function(done) {
    var fixtures = '123456789'.split('');

    fixtures.forEach(function(fixture) {
      wweval(fixture, function(result) {
        expect(parseInt(fixture, 10)).to.equal(result);
        fixtures.shift();
        if (!fixtures.length) done();
      });
    });
  });

});