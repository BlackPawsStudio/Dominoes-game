import { DicePiece } from "./Dice"
import { Dice } from "../types"

export const Pile = ({diceData}:{diceData: Dice[]}) => {
  return (
    <div className="pile">
      <h3 className="pile__text">Pile:</h3>
      <div className="pile__dice">
        {diceData.map((el, id) => 
          <DicePiece key={id} data={[el[0], el[1]]}/>)}
      </div>
    </div>
  )
}