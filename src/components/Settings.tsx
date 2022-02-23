import { useState } from "react";
import {
  changePlayers,
  changeSpeed,
  pauseGame,
  resetGame,
  startGame,
} from "../store/dominoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Settings = ({
  playersAmount,
  isGameOver,
}: {
  playersAmount: number;
  isGameOver: boolean;
}) => {
  const { speed, isPaused, delay } = useAppSelector(
    ({ dominoSlice: toolkit }) => {
      return {
        speed: toolkit.moveSpeed,
        isPaused: toolkit.isGamePaused,
        delay: toolkit.moveSpeed,
      };
    }
  );

  const [opened, setOpened] = useState(true);

  const dispatch = useAppDispatch();

  const playersInputChange = (e: any) => {
    dispatch(changePlayers(e.target.value));
  };
  const speedInputChange = ({ target }: { target: HTMLInputElement }) => {
    dispatch(changeSpeed(target.value));
  };
  const pauseBtnClick = () => {
    dispatch(pauseGame());
  };
  const startBtnClick = () => {
    if (isGameOver) {
      dispatch(startGame());
    } else {
      dispatch(pauseGame());
      setTimeout(() => {
        dispatch(resetGame());
      }, delay);
    }
  };
  return (
    <div className="settings">
      <p className="settings__title" onClick={() => {setOpened(!opened)}}>
        Settings
      </p>
      <div className={opened ? "" : "settings_hidden"}>
        <p>Amount of players: {playersAmount}</p>
        <input
          disabled={!isGameOver}
          onChange={playersInputChange}
          type="range"
          className="settings__input"
          min="2"
          max="5"
          defaultValue={playersAmount}
        />
        <p>Time for move: {speed / 1000} sec</p>
        <input
          className="settings__input"
          type="range"
          min="0"
          max="5000"
          defaultValue={speed}
          onChange={speedInputChange}
        />
        <div className="settings__buttons">
          <button
            className="settings__buttons__button"
            disabled={isGameOver}
            onClick={pauseBtnClick}
          >
            {isPaused ? "Resume game" : "Pause game"}
          </button>
          <button className="settings__buttons__button" onClick={startBtnClick}>
            {isGameOver ? "Start game" : "Reset game"}
          </button>
        </div>
      </div>
    </div>
  );
};
