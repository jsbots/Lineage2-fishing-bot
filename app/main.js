

const insertSort = () => {

};

/*
const Game = require(`./game.js`);
const config = require(`./config.js`);
const checkBar = require(`./checkBar.js`)

const runBot = async (config) => {
  const win = Game.getWindows(config.game.name)[config.game.winPos];
  const game = Game.getControls(win);
  game.setDelays(config.delays.actionDelay);
  await game.setLanguage(config.game.language);
  for (;;) {
    game.action((k) => k.sendKey(config.keys.fish));
    await sleep(config.delays.winAppear);
    if ((await game.getText(config.zones.fishingWin.name)) == `Fishing`) {
      await checkBar(game, config);
      await sleep(config.delays.cheerAnim);
    }
  }
};
*/
// runBot(config);
