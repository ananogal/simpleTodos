var assert = require('assert');

suite('Tasks', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Tasks.insert({text: 'hello title', createdAt: new Date()});
      var docs = Tasks.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });
});