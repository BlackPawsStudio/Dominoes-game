import { Dice } from "../types"

export const DicePiece = ({data: [first, second]}:{data: Dice}) => {
  return (
    <div className="dice">
      <div className="dice__dots">
        {new Array(first).fill(<span className="dice__dots__dot"></span>)}
      </div>
      <span className="dice__separator"></span>
      <div className="dice__dots">
        {new Array(second).fill(<span className="dice__dots__dot"></span>)}
      </div>
    </div>
  )
}