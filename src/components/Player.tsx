import { playerMove } from "../store/dominoSlice"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { Dice } from "../types"
import { DicePiece } from "./Dice"
import { useEffect } from "react"

export const Player = ({id, diceData}:{id: number, diceData: Dice[]}) => {
  const {playerTurn, isGameOver, speed, isPaused} = useAppSelector(({dominoSlice: toolkit}) => {
    return {
      playerTurn: toolkit.playerTurn,
      isGameOver: toolkit.isGameOver,
      speed: toolkit.moveSpeed,
      isPaused: toolkit.isGamePaused
    }
  })

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isGameOver && !isPaused)
      if (playerTurn.id === id) {    
        setTimeout(() => {
          dispatch(playerMove({id: id, dice: diceData}))
        }, speed)
      }
  }, [playerTurn, isPaused])

  return (
    <div className="player">
      <p className="player__number">Player: {id}</p>
      <span className="player__separator"></span>
      <div className="player__dice">
        {diceData.map((el, id) => 
          <DicePiece key={id} data={[el[0], el[1]]}/>)}
      </div>
    </div>
  )
}