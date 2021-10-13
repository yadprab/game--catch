import { useEffect, useRef } from "react";
import AUD from "../Audio/lose.mp3";
import IMG from "../Images/char3.png";
import { ButtonComp } from "./ButtonComp";
const Lose = () => {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    (ref.current as HTMLAudioElement).play();
  }, []);
  return (
    <div className="lose--wrapper">
      <div className="inner--wrapper">
        <div className="top--wrapper">
          <div className="img--wrapper">
            <img src={IMG} alt="character" />
          </div>
          <h1>You lose</h1>
        </div>

        <div className="button--wrapper">
          <ButtonComp Wc="reset" val="Play Again" Bc="reset" ty="Reset" />
          <ButtonComp Wc="exit" val="exit" Bc="exit" ty="Exit" />
        </div>
      </div>

      <audio ref={ref}>
        <source src={AUD} type="audio/mp3" />
      </audio>
    </div>
  );
};
export { Lose };
