import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js'


console.log(Game);
console.log(GameSavingData, 'gmsavingdata');
console.log(loadGame, 'load');
console.log(saveGame, 'save');


const game = new Game();
game.start();


