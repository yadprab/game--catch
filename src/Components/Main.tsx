import { useContext } from "react";
import IMG from "../Images/mainchar2.png";
import { datacontext } from "./datacontext";
const Main = () => {
  const context = useContext(datacontext);
  return (
    <div className="main--outer--wrapper">
      <main className="game--main--area">
        <div className="top--section">
          <h1>Catch The Thunder</h1>
          <button
            id="play"
            onClick={() => {
              context?.dispatch({ type: "Play" });
            }}
          >
            PLAY
          </button>
        </div>
        <div className="bottom--section">
          <div className="image">
            <img src={IMG} alt="" />
          </div>
          <div className="tool--tip">
            <p>Mame need help</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export { Main };
