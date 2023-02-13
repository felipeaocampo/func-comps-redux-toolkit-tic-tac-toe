import { useDispatch, useSelector } from "react-redux";

import { resetGame } from "../redux/slices/gameSlice";

const Winner = () => {
  const { player1Turn } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const playAgainHandler = () => {
    dispatch(resetGame());
  };

  return (
    <div className="winner">
      <h2>Congratulations, {`${!player1Turn ? `X` : `O`}`}s!</h2>
      <h3>You WON!</h3>
      <button className="playagain" onClick={playAgainHandler}>
        Play again?
      </button>
    </div>
  );
};

export default Winner;
