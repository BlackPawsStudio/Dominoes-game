import { createSlice } from "@reduxjs/toolkit";
import { Available, Dice } from "../types";
import { getHighestDice, getRandomDice } from "./reduxFunctions/diceFunctions";
import { fillPile } from "./reduxFunctions/gameFunctions";
import { fillPlayers, findAvailable } from "./reduxFunctions/playerFunctions";

const availableNumbers = (allDetails: Dice[]): Available => {
  const leftAvailablePlace = allDetails[0][0];
  const rightAvailablePlace = allDetails[allDetails.length - 1][1];
  return [leftAvailablePlace, rightAvailablePlace];
};

const addToTable = (table: Dice[], dice: Dice): Dice[] => {
  const newTable = table;
  const availableNums = availableNumbers(table);
  const reversedDice: Dice = [dice[1], dice[0]];
  const allVariants: Dice[] = [dice, reversedDice];
  for (let i = 0; i < allVariants.length; i++) {
    if (allVariants[i][0] === availableNums[1]) {
      newTable.push(allVariants[i]);
      break;
    } else if (allVariants[i][1] === availableNums[0]) {
      newTable.unshift(allVariants[i]);
      break;
    }
  }
  return newTable;
};

const dominoSlice = createSlice({
  name: "domino",
  initialState: {
    pile: [] as Dice[],
    playersAmount: 2,
    players: [
      {
        id: 0,
        dice: [] as Dice[],
      },
    ],
    table: [] as Dice[],
    message: "",
    playerQueue: [] as number[],
    playerTurn: { id: 0 },
    isGameOver: true,
    isGamePaused: false,
    skipCount: 0,
    moveSpeed: 1500,
  },
  reducers: {
    initFill(state) {
      state.pile = fillPile();
      state.table = [];
      state.table.push(getRandomDice(state.pile));
      state.players = [];
      state.players = fillPlayers(state.playersAmount, state.pile);
      state.players.sort((a, b) =>
        getHighestDice(a.dice) < getHighestDice(b.dice) ? 1 : -1
      );
      state.playerQueue = state.players.map((el) => el.id);
      state.message = "Everything is up and ready";
    },
    changePlayers(state, { payload }) {
      state.playersAmount = payload;
    },
    startGame(state) {
      state.isGamePaused = false;
      state.isGameOver = !state.isGameOver;
      state.playerTurn = { id: state.playerQueue[0] };
    },
    resetGame(state) {
      state.isGamePaused = true;
      state.isGameOver = true;
      state.playerTurn = { id: state.playerQueue[0] };
    },
    playerMove(state, { payload }) {
      const switchPlayer = () => {
        const nextPlayerId = state.playerQueue.indexOf(state.playerTurn.id) + 1;
        state.playerTurn = { id: state.playerQueue[nextPlayerId] };

        if (state.playerTurn.id === undefined) {
          state.playerTurn = { id: state.playerQueue[0] };
        }
      };

      const currPlayer =
        state.players[state.playerQueue.indexOf(state.playerTurn.id)];
      let availableDice = findAvailable(
        availableNumbers(state.table),
        payload.dice
      );
      if (!availableDice) {
        if (state.pile.length === 0) {
          state.message = `Pile now is empty, player ${payload.id}'s skipping`;
          state.skipCount++;
          if (state.skipCount === state.players.length) {
            state.isGamePaused = true;
            alert(`No legal moves! Draw!`);
          }
          switchPlayer();
        } else {
          const newDice = payload.dice.concat();
          newDice.unshift(getRandomDice(state.pile));
          currPlayer.dice = newDice;

          state.message = `Player ${payload.id} picked ${JSON.stringify(
            payload.dice[0]
          )}`;
          availableDice = findAvailable(
            availableNumbers(state.table),
            payload.dice
          );
          state.playerTurn = { id: currPlayer.id };
        }
      } else {
        const availableDiceID = payload.dice.indexOf(availableDice);

        const newDice = payload.dice.concat();
        newDice.splice(availableDiceID, 1);
        currPlayer.dice = newDice;

        state.table = addToTable(state.table, availableDice as Dice);
        state.message = `Player ${payload.id} played ${JSON.stringify(
          availableDice
        )}`;
        state.skipCount = 0;

        if (currPlayer.dice.length === 0) {
          state.isGamePaused = true;
          alert(`Player ${payload.id} wins!`);
        }

        switchPlayer();
      }
    },
    changeSpeed(state, { payload }) {
      state.moveSpeed = 5000 - payload;
    },
    pauseGame(state) {
      state.isGamePaused = !state.isGamePaused;
    },
  },
});

export default dominoSlice.reducer;
export const {
  initFill,
  changePlayers,
  startGame,
  resetGame,
  playerMove,
  changeSpeed,
  pauseGame,
} = dominoSlice.actions;
