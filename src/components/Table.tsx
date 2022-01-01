import { DicePiece } from "./Dice"
import { Dice } from "../types"

export const Table = ({diceData}:{diceData: Dice[]}) => {
  return (
    <div className="table">
      <h3 className="table__text">Table:</h3>
      <div className="table__dice">
        {diceData.map((el, id) => 
          <DicePiece key={id} data={[el[0], el[1]]}/>)}
      </div>
    </div>
  )
}