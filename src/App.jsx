import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { renderGame } from "./redux/slices/gameSlice";

import Grid from "./components/Grid";

import "./App.css";
import Winner from "./components/Winner";

function App() {
  const { winner, started } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const startGameHandler = () => {
    dispatch(renderGame());
  };

  return (
    <div className="App">
      {!started && !winner && (
        <button className="reset-btn" onClick={startGameHandler}>
          Start Game!
        </button>
      )}
      {started && <Grid />}
      {started && winner && <Winner />}
    </div>
  );
}

export default App;
