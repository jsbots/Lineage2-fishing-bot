const config = exports.config = {
  game: {
    name: `Asterios`,
    winPos: 0,
    language: `eng`,
  },
  delays: {
    actionDelay: [50, 150],
    winAppear: 5000,
    cheerAnim: 500,
  },
  keys: {
    fish: `1`,
    pump: `2`,
    reel: `3`,
  },
  zones: {
    fishingWin: {
      bar: {
        x: 61,
        y: 346,
        width: 232,
        height: 15,
      },
      name: {
        x: 156,
        y: 105,
        width: 42,
        height: 16,
      },
    },
  },
};
