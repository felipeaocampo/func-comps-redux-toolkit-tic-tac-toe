import { useSelector, useDispatch } from "react-redux";

import { changeBox, checkForWinner } from "../redux/slices/gameSlice";

const Box = ({ boxId }) => {
  const {
    game: { boxesValues },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(game);

  const boxClickedHandler = () => {
    // console.log(`Box ${boxId} clicked`);
    dispatch(changeBox(boxId));
    dispatch(checkForWinner());
  };
  // console.log(boxesValues);

  return (
    <div className="box" onClick={boxClickedHandler}>
      {boxesValues[boxId]}
    </div>
  );
};

export default Box;
