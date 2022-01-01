import { Dice, Player, Available, Pile } from '../../types';
import { getRandomDice } from './diceFunctions';

export const fillPlayers = (playersAmount:number, pile:Pile):Player[] => {
  const players:Player[] = [];
  for (let i = 0; i < playersAmount; i++) {
    players.push({
      id: i,
      dice: [],
    });
  }
  const cardsAmount = playersAmount < 4 ? 7 : 5;
  pickDices(players, pile, cardsAmount);
  return players;
};

const pickDice = (player:Player, pile:Dice[]):void => {
  player.dice.push(getRandomDice(pile));
};

const pickDices = (players:Player[], pile:Dice[], cardsAmount:number):void => {
  for (let i = 0; i < cardsAmount; i++) {
    players.forEach((el) => pickDice(el, pile));
  }
};

export const findAvailable = (available:Available, dice:Dice[]):Dice | undefined => {
  return dice.find(el => (el[0] === available[0]
      || el[0] === available[1]
      || el[1] === available[0]
      || el[1] === available[1]))
};
