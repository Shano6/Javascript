const custom_lodash = require('./custom_lodash')

//merge
var object1 = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
   
  var object2 = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

test('merge: merges objects',()=>{
    expect(custom_lodash.merge(object1, object2)).toEqual(
        { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
    )
} );


//omit
var object = { 'a': 1, 'b': '2', 'c': 3 };

test('omit: omits parameters from object',()=>{
    expect(custom_lodash.omit(object, ['a', 'c'])).toEqual(
        { 'b': '2' }
    )
} );

test('omit: omits single parameter from object',()=>{
    expect(custom_lodash.omit(object, 'c')).toEqual(
        { 'a': 1, 'b': '2' }
    )
} );


//omitBy
test('omitBy: returns object with string value',()=>{
    expect(custom_lodash.omitBy(object, (e)=>typeof e =='number')).toEqual(
        { 'b': '2' }
    )
} );

test('omitBy: returns empty object',()=>{
    expect(custom_lodash.omitBy(object)).toEqual(
        { }
    )
} );


//pick
test('pick: returns object with picked keys',()=>{
    expect(custom_lodash.pick(object, ['a', 'c'])).toEqual(
        { 'a': 1, 'c': 3 }
    )
} );

test('pick: returns object with picked string key',()=>{
    expect(custom_lodash.pick(object, 'a')).toEqual(
        { 'a': 1 }
    )
} );


//pickBy
test('pickBy: returns object with number values',()=>{
    expect(custom_lodash.pickBy(object, (e)=>typeof e =='number')).toEqual(
        { 'a': 1, 'c': 3 }
    )
} );

test('pickBy: returns whole object',()=>{
    expect(custom_lodash.pickBy(object)).toEqual(
        { 'a': 1, b:"2", 'c': 3 }
    )
} );


//toPairs
function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

test('pickBy: returns object with number values',()=>{
    expect(custom_lodash.toPairs(new Foo)).toEqual(
        [['a', 1], ['b', 2]]
    )
} );


// chunk
test('chunk: Array splitted into two equal parts',()=>{
    expect(custom_lodash.chunk(['a', 'b', 'c', 'd'], 2)).toEqual(
        [['a', 'b'], ['c', 'd']]
    )
} );

test('chunk: remaining elements are added to another array',()=>{
    expect(custom_lodash.chunk(['a', 'b', 'c', 'd'], 3)).toEqual(
        [['a', 'b', 'c'], ['d']]
    )
} );

test('chunk: works with default size value 1',()=>{
    expect(custom_lodash.chunk(['a', 'b', 'c', 'd'])).toEqual(
        [['a'], ['b'], ['c'], ['d']]
    )
} );


//compact
test('compact: removes falsey value',()=>{
    expect(custom_lodash.compact([0, 1, false, 2, '', 3])).toEqual(
        [1, 2, 3]
    )
} );


//drop
test('drop: removes first element',()=>{
    expect(custom_lodash.drop([1, 2, 3])).toEqual(
        [2, 3]
    )
} );

test('drop: removes first two elements',()=>{
    expect(custom_lodash.drop([1, 2, 3], 2)).toEqual(
        [3]
    )
} );

test('drop: drops all elements',()=>{
    expect(custom_lodash.drop([1, 2, 3], 5)).toEqual(
        []
    )
} );

test('drop: doesnt drop any elements',()=>{
    expect(custom_lodash.drop([1, 2, 3], 0)).toEqual(
        [1, 2, 3]
    )
} );


//dropWhile
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

test('dropWhile: returns active users',()=>{
    expect(custom_lodash.dropWhile(users, function(o) { return !o.active; })).toEqual(
        [{ 'user': 'pebbles', 'active': true }]
    )
} );

test('dropWhile: drops the first user without parameter',()=>{
    expect(custom_lodash.dropWhile(users)).toEqual(
        [{"active": false, "user": "fred"}, {"active": true, "user": "pebbles"}]
    )
} );

test('dropWhile: returns non active users',()=>{
    expect(custom_lodash.dropWhile(users, { 'user': 'barney', 'active': false })).toEqual(
        [{ 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }]
    )
} );

test('dropWhile: returns all users',()=>{
    expect(custom_lodash.dropWhile(users, 'active')).toEqual(
        [{ 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }]
    )
} );


//take
test('take: returns first element',()=>{
    expect(custom_lodash.take([1, 2, 3])).toEqual(
        [1]
    )
} );

test('take: returnst first two elements',()=>{
    expect(custom_lodash.take([1, 2, 3], 2)).toEqual(
        [1,2]
    )
} );

test('take: returns whole array',()=>{
    expect(custom_lodash.take([1, 2, 3], 0)).toEqual(
        []
    )
} );

test('take: returns empty array',()=>{
    expect(custom_lodash.take([1, 2, 3], 5)).toEqual(
        [1, 2, 3]
    )
} );

//filter
var users1 = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

test('filter: returns all users without parameter',()=>{
    expect(custom_lodash.filter(users1)).toEqual(
        [{ 'user': 'barney', 'age': 36, 'active': true },{ 'user': 'fred',   'age': 40, 'active': false }]
    )
} );

test('filter: returns active users',()=>{
    expect(custom_lodash.filter(users1, function(o) { return !o.active; })).toEqual(
        [{ 'user': 'fred', 'age': 40, 'active': false }]
    )
} );

test('filter: returns active users aged 36',()=>{
    expect(custom_lodash.filter(users1, { 'age': 36, 'active': true })).toEqual(
        [{ 'user': 'barney', 'age': 36, 'active': true }]
    )
} );

test('filter: returns inactive users',()=>{
    expect(custom_lodash.filter(users1, ['active', false])).toEqual(
        [{ 'user': 'fred', 'age': 40, 'active': false }]
    )
} );

test('filter: returns active users',()=>{
    expect(custom_lodash.filter(users1, 'active')).toEqual(
        [{ 'user': 'barney', 'age': 36, 'active': true }]
    )
} );


//find
var users2 = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];

test('find: returns first user without parameter',()=>{
    expect(custom_lodash.find(users2)).toEqual(
        { 'user': 'barney',  'age': 36, 'active': true }
    )
} );

test('find: returns user with less age then 40',()=>{
    expect(custom_lodash.find(users2,  function(o) { return o.age < 40; })).toEqual(
        { 'user': 'barney',  'age': 36, 'active': true }
    )
} );

test('find: returns active user with age 1',()=>{
    expect(custom_lodash.find(users2,  { 'age': 1, 'active': true })).toEqual(
        { 'user': 'pebbles', 'age': 1,  'active': true }
    )
} );

test('find: returns first non active user',()=>{
    expect(custom_lodash.find(users2,  ['active', false])).toEqual(
        { 'user': 'fred',    'age': 40, 'active': false }
    )
} );

test('find: returns first active user',()=>{
    expect(custom_lodash.find(users2, 'active')).toEqual(
        { 'user': 'barney',  'age': 36, 'active': true }
    )
} );


// includes

// test('includes: returns true',()=>{
//     expect(custom_lodash.includes('[1, 2, 3]', -1)).toEqual(
//         true
//     )
// } );

test('includes: returns true',()=>{
    expect(custom_lodash.includes([1, 2, 3], 1)).toEqual(
        true
    )
} );

test('includes: returns false',()=>{
    expect(custom_lodash.includes([1, 2, 3], 1, 2)).toEqual(
        false
    )
} );

test('includes: returns true',()=>{
    expect(custom_lodash.includes({ 'a': 1, 'b': 2 }, 1)).toEqual(
        true
    )
} );

test('includes: returns true',()=>{
    expect(custom_lodash.includes('abcd', 'bc')).toEqual(
        true
    )
} );

//map
function square(n) {
    return n * n;
  }
 
test('map: returns same avlue without parameter',()=>{
    expect(custom_lodash.map([4, 8])).toEqual(
        [4, 8]
    )
} );

test('map: returns square of 4 and 8',()=>{
    expect(custom_lodash.map([4, 8], square)).toEqual(
        [16, 64]
    )
} );

test('map: returns square of object a and b values',()=>{
    expect(custom_lodash.map({ 'a': 4, 'b': 8 }, square)).toEqual(
        [16, 64]
    )
} );


test('map: returns user values of each object',()=>{
    expect(custom_lodash.map(users, 'user')).toEqual(
        ['barney', 'fred', "pebbles"]
    )
} );


//zip
test('zip: creates two arrays with correct values',()=>{
    expect(custom_lodash.zip(['a', 'b'], [1, 2], [true, false])).toEqual(
        [['a', 1, true], ['b', 2, false]]
    )
} );


//identity
object3 = { 'a': 1 };

test('identity: returns value',()=>{
    expect(custom_lodash.identity(object3)).toEqual(
        { 'a': 1 }
    )
} );

//negate
function isEven(n) {
    return n % 2 == 0;
  }

test('negate: negates the result of the predicate func',()=>{
    expect(custom_lodash.filter([1, 2, 3, 4, 5, 6], custom_lodash.negate(isEven))).toEqual(
        [1, 3, 5]
    )
} );