import { DicePiece } from "./Dice"
import { Dice } from "../types"
import { useState } from "react"

export const Pile = ({ diceData }: { diceData: Dice[] }) => {
  const [opened, setOpened] = useState(true);
  
  return (
    <div className="pile">
      <h3 className="pile__text" onClick={() => {setOpened(!opened)}}>Pile:</h3>
      <div className={opened ? "" : "pile__dice__hidden"}>
        {diceData.map((el, id) => 
          <DicePiece key={id} data={[el[0], el[1]]}/>)}
      </div>
    </div>
  )
}