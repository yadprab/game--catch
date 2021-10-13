import { useReducer } from "react";
import { Countdown } from "./Components/Countdown";
import { datacontext } from "./Components/datacontext";
import { Lose } from "./Components/Lose";
import { Main } from "./Components/Main";
import { PositionComp } from "./Components/PositionComp";
import { Story } from "./Components/Story";
import { Win } from "./Components/Win";
import { ACTIONTYPES, ACTIONTYPES2, IState } from "./Interface/interface";
import "./styles/Styles.css";
const initialState = {
  isPlay: false,
  isStory: true,
  isPosition: false,
  positionSet: false,
  catcherPosition: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  count: false,
  gameStart: false,
  gameStop: false,
  isWin: false,
  isLose: false,
};

const reducer = (
  state: IState["state"],
  action: ACTIONTYPES | ACTIONTYPES2
) => {
  const nonMutable = { ...initialState };
  const cP = { ...initialState.catcherPosition };
  switch (action.type) {
    case "Play":
      return {
        ...state,
        isPlay: true,
      };
    case "Story":
      return {
        ...state,
        isPlay: false,
      };
    case "Position":
      return {
        ...state,
        isStory: false,
        isPosition: true,
      };
    case "Set Position":
      return {
        ...state,
        positionSet: true,
      };

    case "PoVal":
      return {
        ...state,
        count: true,
        catcherPosition: action.payload,
      };
    case "Started":
      return {
        ...state,
        count: false,
        gameStart: true,
      };
    case "Stop":
      return {
        ...state,
        gameStop: true,
      };
    case "ResultWin":
      return {
        ...state,
        isWin: true,
        isLose: false,
      };
    case "ResultLose":
      return {
        ...state,
        isWin: false,
        isLose: true,
      };

    case "Reset":
      return {
        ...state,

        isWin: false,
        isLose: false,
        gameStop: false,
        gameStart: false,
        positionSet: false,
        catcherPosition: cP,
      };

    case "Exit":
      return {
        ...nonMutable,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <datacontext.Provider value={{ state, dispatch }}>
        {state.isPlay && state.isStory && <Story />}
        {!state.isPlay && <Main />}
        {state.isPlay && state.isPosition && <PositionComp />}
        {state.isPlay && state.count && <Countdown />}
        {state.isPlay && state.isWin && <Win />}
        {state.isPlay && state.isLose && <Lose />}
      </datacontext.Provider>
    </>
  );
}

export default App;
