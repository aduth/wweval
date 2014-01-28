/* jshint expr: true */
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
    var fixtures = '123456789'.split(''),
      iter = 0;

    for (var f = 0, fl = fixtures.length; f < fl; f++) {
      var fixture = fixtures[f];
      wweval(fixture, function(result) {
        expect(parseInt(fixture, 10)).to.equal(result);
        if (++iter === fixtures.length) done();
      });
    }
  });

});