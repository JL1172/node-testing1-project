const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const result = utils.trimProperties(input);
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' });
    expect(input).not.toEqual(result);
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' };
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const result = utils.trimProperties(input);
    expect(result).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    let obj = { name: '  jane  ', foo: "bar    " }
    const result = utils.trimPropertiesMutation(obj)
    expect(obj).toBe(result);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const arrayOfObjects = [{integer : 2}, {integer : 3}, {integer : 10}, {integer : 1}]
    const result = utils.findLargestInteger(arrayOfObjects);
    expect(result).toBe(10);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
      let result = counter.countDown(); 
      expect(result).toBe(3); 
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let result1 = counter.countDown();
    let result2 = counter.countDown();
    expect(result1).toBe(3);
    expect(result2).toBe(2);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let result1 = counter.countDown();
    expect(result1).toBe(3);
    expect(counter.initialNumber).toBe(2);

    let result2 = counter.countDown();
    expect(result2).toBe(2);
    expect(counter.initialNumber).toBe(1);

    let result3 = counter.countDown();
    expect(result3).toBe(1);
    expect(counter.initialNumber).toBe(0); 

    let result4 = counter.countDown();
    expect(result4).toBe(0);
    expect(counter.initialNumber).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  // test('[9] the FIRST call of seasons.next returns "summer"', () => {})
  // test('[10] the SECOND call of seasons.next returns "fall"', () => {})
  // test('[11] the THIRD call of seasons.next returns "winter"', () => {})
  // test('[12] the FOURTH call of seasons.next returns "spring"', () => {})
  // test('[13] the FIFTH call of seasons.next returns again "summer"', () => {})
  // test('[14] the 40th call of seasons.next returns "spring"', () => {})
})

// describe('[Exercise 6] Car', () => {
//   let focus
//   beforeEach(() => {
//     focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
//   })
//   // test('[15] driving the car returns the updated odometer', () => {})
//   // test('[16] driving the car uses gas', () => {})
//   // test('[17] refueling allows to keep driving', () => {})
//   // test('[18] adding fuel to a full tank has no effect', () => {})
// })

// describe('[Exercise 7] isEvenNumberAsync', () => {
//   // test('[19] resolves true if passed an even number', () => {})
//   // test('[20] resolves false if passed an odd number', () => {})
// })
