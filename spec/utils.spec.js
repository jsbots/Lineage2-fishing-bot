const { toPixels, getValDiff } = require(`../app/utils.js`);

describe(`toPixels`, () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  it(`puts every 3 values into one array`, () => {
    expect(toPixels(array)[0]).toEqual([1, 2, 3])
  });

  it(`puts every 4 values into one array if alfa argument is passed`, () => {
    let alfa = true;
    expect(toPixels(array, alfa)[0]).toEqual([1, 2, 3, 4]);
  })

  it(`returns 2 arrays when given 8 values`, () => {
    expect(toPixels(array)).toHaveSize(2);
  });

  it(`returns 3 arrays when given 12 values`, () => {
    expect(toPixels(array.concat(9, 10, 11, 12))).toHaveSize(3);
  })

  it(`returns empty array when given wrong input`, () => {
    expect(toPixels()).toHaveSize(0);
    expect(toPixels(null)).toHaveSize(0);
    expect(toPixels(`hi`)).toHaveSize(0);
  })
})

describe(`getValDiff`, () => {
  it(`finds an avarage difference between values when given 3 values `, () => {
    expect(getValDiff([0, 0, 10])).toEqual([-5, -5, 10]);
  });

  it(`find an avarage difference between values when given 4 values`, () => {
    expect(getValDiff([0, 0, 0, 10])).toEqual([-4, -4, -4, 10])
  })

  it(`returns an empty array if given an empty array`, () => {
    expect(getValDiff([])).toHaveSize(0);
  })
})
