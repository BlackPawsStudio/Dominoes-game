export type Dice = [number, number];

export type Pile = Dice[];

export interface Player {
  id: number;
  dice: Dice[];
}

export interface Table {
  allDetails: Dice[];
  availableNumbers: () => Available
}

export type Available = [number, number];

export interface State {
  pile: Dice[],
  playersAmount: number,
  players: Player[],
  table: Table,
  message: string,
  isGameOver: boolean
}