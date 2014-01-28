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
    var iter = 0,
      amount = 10,
      testDone;

    testDone = function(result) {
      if (++iter === amount) done();
    };

    for (var f = 0; f < amount; f++) {
      wweval('1', testDone);
    }
  });

});