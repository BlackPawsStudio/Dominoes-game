import { Pile, Player, Table } from '../../types';
import { getRandomDice, getHighestDice } from './diceFunctions';
import { fillPlayers } from './playerFunctions';
// import { playerMove, fillPile } from './gameFunctions';

// const pile:Pile = fillPile();

// const playersAmount = 2;

// const players:Player[] = fillPlayers(playersAmount, pile);

// const table:Table = {
//   allDetails: [getRandomDice(pile)],
//   availableNumbers() {
//     const leftAvailablePlace = this.allDetails[0][0];
//     const rightAvailablePlace = this.allDetails[this.allDetails.length - 1][1];
//     return [leftAvailablePlace, rightAvailablePlace];
//   },
// };

// players.forEach((el, id) => {
//   console.log(`Player ${id} has ${JSON.stringify(el.dice)}`);
// });
// players.sort((a, b) => {
//   if (getHighestDice(a.dice) < getHighestDice(b.dice)) return 1;
//   return -1;
// });
// console.log(`Default pile is ${JSON.stringify(pile)}`);
// console.log(`Default table is ${JSON.stringify(table.allDetails)}`);
// console.log(`Player ${players[0].id} moves first`);
// console.log('\n\r');

// let skipCount = 0;


// const gameLoop = async (isEnd:boolean) => {
//   if (!isEnd) { gameLoop(await gameIteration()); }
// };

const isEnd = false;

// window.onload = async () => gameLoop(isEnd);
