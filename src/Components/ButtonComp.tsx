import { useContext } from "react";
import { IPosition } from "../Interface/interface";
import { datacontext } from "./datacontext";

const ButtonComp = ({
  Wc,
  Bc,
  val,
  comp,
  ty,
  payload,
}: {
  Wc: string;
  Bc: string;
  val: string;
  comp?: JSX.Element;
  ty: string;
  payload?: IPosition["state"];
}) => {
  const context = useContext(datacontext);

  return (
    <div className={Wc}>
      <button
        className={Bc}
        onClick={() => {
          context?.dispatch({ type: ty });
        }}
      >
        {val}
        {comp}
      </button>
    </div>
  );
};
export { ButtonComp };
