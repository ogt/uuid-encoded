var uuid = require('../');
var test = require('tap').test;
var _ = require('glutils');

test('simple test', function (t) {
  _.run(function() {
    t.plan(200);
    var uuids = {};
    for (var i=0; i < 100; i++) {
        var n = uuid();
        t.equal(22,n.length);
        t.notok(_.has(uuids,n));
        uuids[n] = 1;
    }
    t.end();
  });
});
