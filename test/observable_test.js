import Observable from '../observable';

QUnit.test( "observable.subscribe()  test", function( assert ) {
  var done = assert.async();
  var observable = new Observable();
  observable.subscribe('test', function () {
    assert.equal(true, true, 'The assertion has been called');
    done();
  });
  observable.publish('test');
});

QUnit.test( "observable.publish()  test", function( assert ) {
  var done = assert.async();
  var observable = new Observable();
  observable.subscribe('test2', function () {
    assert.equal(true, true, 'The assertion has been called');
    done();
  });
  observable.publish('test2');
});

QUnit.test( "observable.publish() before observable.subscribe() test", function( assert ) {
  var done = assert.async();
  var observable = new Observable();
  observable.publish('test3');
  observable.subscribe('test3', function () {
    assert.equal(true, true, 'The assertion has been called');
    done();
  });
});

QUnit.test( "observable.unsubscribe() test", function( assert ) {
  var done = assert.async();
  var observable = new Observable();
  observable.subscribe('test4', function () {
    assert.equal(true, false, 'The assertion has been called');
    done();
  });
  observable.unsubscribe('test4');
  observable.publish('test4');
  assert.equal(true, true, 'The assertion has not been called');
  done();
});
