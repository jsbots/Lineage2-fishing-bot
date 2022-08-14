const Game = require(`../app/game.js`);

describe(`Game`, () => {
  describe(`Game.getAllWindows(name, className)`, () => {
      let testWins = [{title: `test`, className: `testClass`},
                      {title: `test2`, className: `testClass2`},
                      {title: `test`, className: `testClass`},
                      {title: `test2`, className: `testClass2`}];
      let dummy;
      beforeEach(() => {
        dummy = { getAllWindows() {} };
        spyOn(dummy, `getAllWindows`).and.returnValue(testWins);
      });

    it(`finds a window under given name using getAllWindows function`, () => {
      let found = Game.getWindows(`test`, null, dummy.getAllWindows);
      expect(found).toHaveSize(2);
      expect(found).toEqual([testWins[0], testWins[2]]);
    });

    it(`finds a window under given name and classname using getAllWindows function`, () => {
      let found = Game.getWindows(`test2`, `testClass2`, dummy.getAllWindows);
      expect(found).toHaveSize(2);
      expect(found).toEqual([testWins[1], testWins[3]]);
    });

    it(`finds nothing if title name wasn't provided`, () => {
      let found = Game.getWindows(null, null, dummy.getAllWindows);
      expect(found).toHaveSize(0);
    })
  });
})
