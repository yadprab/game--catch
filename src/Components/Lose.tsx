import { ButtonComp } from "./ButtonComp";

const Lose = () => {
  return (
    <div className="lose--wrapper">
      <div className="inner--wrapper">
        <h1>You lose</h1>
        <ButtonComp Wc="reset" val="reset" Bc="reset" ty="Reset" />
      </div>
    </div>
  );
};
export { Lose };
