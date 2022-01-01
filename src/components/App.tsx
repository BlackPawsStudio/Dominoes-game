import "../assets/styles/index.css"
import { Table } from "./Table";
import { Pile } from "./Pile";
import { Player } from "./Player";
import { Message } from "./Message";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { initFill } from "../store/dominoSlice";
import { Settings } from "./Settings";

function App() {
  const {pile, playersAmount, players, table, message, isGameOver} = useAppSelector(({dominoSlice: toolkit}) => {
    return {
      pile: toolkit.pile, 
      playersAmount: toolkit.playersAmount,
      players: toolkit.players, 
      table: toolkit.table, 
      message: toolkit.message,
      isGameOver: toolkit.isGameOver
    }
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isGameOver)
      dispatch(initFill())
  }, [isGameOver, playersAmount])
  return (
    <>
      <Table diceData={table}/>
      <Settings playersAmount={playersAmount} isGameOver={isGameOver}/>
      <Pile diceData={pile}/>
      <Message text={message}/>
      <div className="players">
        {players.map((el, id) => 
          <Player key={id} id={el.id} diceData={el.dice}/>
        )}
      </div>
    </>
  );
}

export default App;
