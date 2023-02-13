import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: `game`,
  initialState: {
    started: false,
    boxesValues: {
      A: `-`,
      B: `-`,
      C: `-`,
      D: `-`,
      E: `-`,
      F: `-`,
      G: `-`,
      H: `-`,
      I: `-`,
    },
    player1Turn: true,
    winner: false,
  },
  reducers: {
    renderGame: (state) => {
      state.started = true;
    },
    changeBox: (state, action) => {
      // console.log(action.payload);
      // check if current box is available
      if (state.boxesValues[action.payload] === `-` && !state.winner) {
        //check turn
        // if p1, turn box val to X
        if (state.player1Turn) {
          state.boxesValues[action.payload] = `X`;
        } else {
          // else, box val to O
          state.boxesValues[action.payload] = `O`;
        }
        state.player1Turn = !state.player1Turn;
      }
    },
    checkForWinner: (state) => {
      const a = state.boxesValues.A;
      const d = state.boxesValues.D;
      const g = state.boxesValues.G;

      // console.log(state.boxesValues.B);

      //HORIZONTAL CHECKS
      if (
        a !== `-` &&
        state.boxesValues.B.includes(a) &&
        state.boxesValues.C.includes(a)
      ) {
        state.winner = true;
        return;
      }
      if (
        d !== `-` &&
        state.boxesValues.E.includes(d) &&
        state.boxesValues.F.includes(d)
      ) {
        state.winner = true;
        return;
      }
      if (
        g !== `-` &&
        state.boxesValues.H.includes(g) &&
        state.boxesValues.I.includes(g)
      ) {
        state.winner = true;
        return;
      }

      //VERTICAL CHECKS
      const b = state.boxesValues.B;
      const c = state.boxesValues.C;

      if (
        a !== `-` &&
        state.boxesValues.D.includes(a) &&
        state.boxesValues.G.includes(a)
      ) {
        state.winner = true;
        return;
      }
      if (
        b !== `-` &&
        state.boxesValues.E.includes(b) &&
        state.boxesValues.H.includes(b)
      ) {
        state.winner = true;
        return;
      }
      if (
        c !== `-` &&
        state.boxesValues.F.includes(c) &&
        state.boxesValues.I.includes(c)
      ) {
        state.winner = true;
        return;
      }

      //DIAGONAL CHECKS

      if (
        a !== `-` &&
        state.boxesValues.E.includes(a) &&
        state.boxesValues.I.includes(a)
      ) {
        state.winner = true;
        return;
      }
      if (
        g !== `-` &&
        state.boxesValues.E.includes(g) &&
        state.boxesValues.C.includes(g)
      ) {
        state.winner = true;
        return;
      }

      // state.winner = currentWinner;
    },
    resetGame: (state) => {
      return (state = {
        started: true,
        boxesValues: {
          A: `-`,
          B: `-`,
          C: `-`,
          D: `-`,
          E: `-`,
          F: `-`,
          G: `-`,
          H: `-`,
          I: `-`,
        },
        player1Turn: true,
        winner: false,
      });
    },
  },
});

export const { renderGame, changeBox, checkForWinner, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
