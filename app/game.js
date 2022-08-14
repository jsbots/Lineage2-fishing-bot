const { getAllWindows, Virtual, Hardware } = require(`keysender`);
const { readTextFrom, convertImage } = require(`./textReader.js`);
const { getField } = require(`./utils.js`);
const getData = getField(`data`);

class Game {
  constructor(keyboard, mouse, workwindow, control) {
    this.keyboard = keyboard;
    this.mouse = mouse;
    this.workwindow = workwindow;
    this.control = control;
  }

  getRgb(zone, type) {
    return pipeline(
      this.workwindow.capture,
      getData,
      bufferToArray,
      toPixels
    )(zone);
  }

  async getText(zone) {
    let img = await convertImage(this.workwindow.capture(zone), 2)
    return await readTextFrom(img);
  }

  async setLanguage(language) {
    await textReader.setWorker(language);
  }

  setDelays(delay) {
    this.keyboard.keyTogglerDelay = delay;
    this.keyboard.keySenderDelay = delay;
    this.mouse.buttonTogglerDelay = delay;
  }

  async action(cb) {
    if (this.control == Hardware) {
      while (!this.workwindow.isForeground()) {
        this.workwindow.setForeground();
        await sleep(500);
      }
    }

    await cb(this.keyboard, this.mouse);
  }

  static getWindows(name, className, getWins = getAllWindows) {
    return getWins().filter((win) => (name === win.title) && (className ? className === win.className : true));
  }

  static getControls({ handle }, Control = Hardware) {
    const { keyboard, mouse, workwindow } = new Control(handle);
    return new Game(keyboard, mouse, workwindow, Control);
  }
}

module.exports = Game;
