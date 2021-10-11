import { useContext } from "react";
import { ButtonComp } from "./ButtonComp";
import { Catcher } from "./Catcher";
import { datacontext } from "./datacontext";
import { Thunder } from "./Thunder";

const PositionComp = () => {
  const context = useContext(datacontext);

  return (
    <div className=" position--wrapper">
      <main className="position--main">
        <div className="set--area">
          <div className="game--area--po">
            <Catcher />
            {context?.state.gameStart && <Thunder />}
          </div>
        </div>
        {!context?.state.positionSet && (
          <div className="set--bottom">
            <p>Drag the catcher to set the position</p>
            <ButtonComp
              Wc="set--button--wrap"
              Bc="set--position"
              val="set position"
              ty="Set Position"
            />
          </div>
        )}
        {context?.state.gameStart && (
          <div className="set--bottom">
            <ButtonComp
              Wc="Stop--button--wrap"
              Bc="Stop--button"
              val="Stop"
              ty="Stop"
            />
          </div>
        )}
      </main>
    </div>
  );
};
export { PositionComp };
