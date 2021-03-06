let assert = require('chai').assert;

import {reduce} from '../../src/index.es6';

describe('reduce', () => {
  const add =  (a,b) => a + b;
  it('should reduce arrays', () =>{
    assert.equal(reduce(add, 0, [0,1,2]), 3);
    assert.equal(reduce(add, '', ['0','1','2']), '012');
  });

  it('should reduce arrays with holes', () => {
    /* jshint -W128*/
    assert.equal(reduce(add, '', ['0', undefined, ,'1','2']), '0undefinedundefined12');
    /* jshint +W128*/
  });

  it('should be curried', () =>{
    let result = reduce(add)(0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add, 0)([0,1,2]);
    assert.equal(result,3);
    result = reduce(add)(0, [0,1,2]);
    assert.equal(result,3);
  });
});
