import {
  Dice,
} from '../../types';
// import { getRandomDice } from './diceFunctions';
// import { findAvailable } from './playerFunctions';

export const fillPile = ():Dice[] => {
  const pile:Dice[] = [];
  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= i; j++) {
      const newDice:Dice = [i, j];
      pile.push(newDice);
    }
  }
  return pile;
};
 // const playerMove = (player:Player, table:Dice[], pile:Pile):Promise<boolean> => new Promise(resolve => {
      //   let availableDice = findAvailable(availableNumbers(table), player.dice);
      //   if (!availableDice) {
      //     while (!availableDice) {
      //       if (pile.length === 0) {
      //         state.message = `Pile now is empty, player ${player.id}'s skipping`;
      //         resolve(true);
      //       }
      //       player.dice.unshift(getRandomDice(pile));
      //       state.message = `Player ${player.id} picked ${JSON.stringify(player.dice[0])}`;
      //       availableDice = findAvailable(availableNumbers(table), player.dice);
      //     }
      //   }
      //   const availableDiceID = player.dice.indexOf(availableDice);
      //   player.dice.splice(availableDiceID, 1);
      //   addToTable(table, availableDice);
      //   state.message = `Player ${player.id} played ${JSON.stringify(availableDice)}`;
      //   resolve(false);
      // });

      // let skipCount = 0

      // while (!state.isGameOver) {
      //   for (let i = 0; i < state.players.length; i++) {
      //     const isSkip = playerMove(state.players[i], state.table, state.pile);
      //     isSkip.then(isSkip => {
      //       console.log(isSkip);
      //       if (isSkip) {
      //         skipCount++;
      //         if (skipCount === state.players.length) {
      //           state.message = 'Draw!!';
      //           state.isGameOver = true;
      //         }
      //       } else if (state.players[i].dice.length === 0) {
      //         state.message = `Player ${state.players[i].id + 1} wins!!`;
      //         state.isGameOver = true;
      //       } else {
      //         skipCount = 0;
      //       }
      //     })
      //   }
      // }
