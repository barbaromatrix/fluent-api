const { CalculateObject, CalculatePrototype } = require('../');

describe('Happy path', () => {
  const summedObjectOperation = CalculateObject;
  const summedPrototypeOperation = new CalculatePrototype(10);

  test('Should return object when not comparing values', () => {
    expect(summedObjectOperation).toBeInstanceOf(Object);
    expect(summedPrototypeOperation).toBeInstanceOf(Object);
  });

  test('Should sum 1 and return 11', () => {
    summedObjectOperation.plus(1);
    summedPrototypeOperation.plus(1);

    expect(summedObjectOperation == 11).toBe(true)
    expect(summedPrototypeOperation == 11).toBe(true)
  });

  test('Should remove 1 and return 10', () => {
    summedObjectOperation.minus(1);
    summedPrototypeOperation.minus(1);

    expect(summedObjectOperation == 10).toBe(true)
    expect(summedPrototypeOperation == 10).toBe(true)
  });

  test('Should multiplyBy 2 and return 20', () => {
    summedObjectOperation.multiplyBy(2);
    summedPrototypeOperation.multiplyBy(2);

    expect(summedObjectOperation == 20).toBe(true)
    expect(summedPrototypeOperation == 20).toBe(true)
  });

  test('Should be dividedBy 2 and return 10', () => {
    summedObjectOperation.dividedBy(2);
    summedPrototypeOperation.dividedBy(2);

    expect(summedObjectOperation == 10).toBe(true)
    expect(summedPrototypeOperation == 10).toBe(true)
  });

  test('Should be possible to chain other methods', () => {
    const chainnedObjectValue =  summedObjectOperation.minus(1).multiplyBy(2).dividedBy(3);
    const chainnedPrototypeValue = summedPrototypeOperation.minus(1).multiplyBy(2).dividedBy(3);

    expect(chainnedObjectValue == 6).toBe(true);
    expect(chainnedPrototypeValue == 6).toBe(true);
  });
});