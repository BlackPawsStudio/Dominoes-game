import { Dice } from "../types"

export const DicePiece = ({data: [first, second]}:{data: Dice}) => {
  return (
    <div className="dice">
      <div className="dice__dots">
        {new Array(first).fill("").map((_, id) => (
          <span className="dice__dots__dot" key={id}></span>
        ))}
      </div>
      <span className="dice__separator"></span>
      <div className="dice__dots">
        {new Array(second).fill("").map((_, id) => (
          <span className="dice__dots__dot" key={id}></span>
        ))}
      </div>
    </div>
  );
}