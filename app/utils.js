const sleep = (time) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

const getValDiff = (values) =>
  values
    .map((v, im) =>
      values.reduce((a, b, ir) => (ir == im ? a : a + (v - b)), 0)
    )
    .map((v) => Math.floor(v / (values.length - 1)));

const getColorsDiff = (colors) => {
  let [red, green, blue, alfa] = getValDiff(colors);
  return { red, green, blue, alfa };
};

const closeTo = (a, b) => a < b + 5 && a > b - 5;

const pipeline = (...fns) =>
  fns.reduce((result, f) => (...args) => f(result(...args)));

const toPixels = (array, alfa) => {
  if (!(array instanceof Array)) array = [];
  let pixels = [];
  for (i = 0; i < array.length; i += 4) {
    pixels.push(array.slice(i, i + 3 + (alfa ? 1 : 0)));
  }
  return pixels;
};

const bufferToArray = (buffer) => Array.from(buffer);

const getField = (attr) => (obj) => obj[attr];

module.exports = {
  getValDiff,
  getColorsDiff,
  closeTo,
  pipeline,
  toPixels,
  bufferToArray,
  getField,
  sleep,
};
