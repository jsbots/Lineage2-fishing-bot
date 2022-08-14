const { createWorker } = require(`tesseract.js`);
const Jimp = require(`jimp`);

const worker = createWorker();

const setWorker = async (language) => {
  await worker.load();
  await worker.loadLanguage(language);
  await worker.initialize(language);
};

const convertImage = async (buffer, scale) => await Jimp.read(buffer)
.greyscale()
.contrast(0.3)
.invert()
.scale(scale);

const readTextFrom = async (img) => {
  let result = await worker.recognize(await img.getBase64Async(Jimp.MIME_PNG));
  return result.data.words.map(({text}) => text);
};

module.exports = {
  setWorker,
  convertImage,
  readTextFrom
};
