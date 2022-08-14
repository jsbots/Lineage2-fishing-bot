const { getColorsDiff, sleep } = require(`./utils.js`);

const isBlue = (pixel) => getColorsDiff(pixel).blue > 25;

const checkBar = async (game, config) => {
  let startedFishing, prevBarSize;
  for (;;) {
    const barSize = game.getRgb(config.zones.fishingWin.bar)
                        .filter(isBlue)
                        .length;

    if (startedFishing && barSize === 0) {
      await sleep(250);
      if ((await game.getText(config.zones.fishingWin.name)) == `Fishing`) {
        game.action((k) => {
          k.toggleKey(config.keys.pump, true);
          k.toggleKey(config.keys.pump, false);
        });
      }
      return;
    }

    if (barSize > 0) {
      startedFishing = true;

      if (!prevBarSize) {
        prevBarSize = barSize;
        await sleep(1250);
        continue;
      }

      if (closeTo(prevBarSize, barSize)) {
        game.action((k) => {
          k.toggleKey(config.keys.pump, true);
          k.toggleKey(config.keys.pump, false);
        });
      } else {
        game.action((k) => {
          k.toggleKey(config.keys.reel, true);
          k.toggleKey(config.keys.reel, false);
        });
      }

      await sleep(2000);
      prevBarSize = null;
    }

    await sleep(250);
  }
};

module.exports = checkBar;
