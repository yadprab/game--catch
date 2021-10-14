import { useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import AUD from "../Audio/win.mp3";
import IMG from "../Images/mainchar2.png";
import { ButtonComp } from "./ButtonComp";

const Win = () => {
  const ref = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    (ref.current as HTMLAudioElement).play();
  }, []);

  const { width, height } = useWindowSize();
  return (
    <div className="lose--wrapper">
      <div className="inner--wrapper">
        <div className="top--wrapper">
          <div className="img--wrapper">
            <img src={IMG} alt="character" />
          </div>
          <h1>You Won</h1>
        </div>

        <div className="button--wrapper">
          <ButtonComp Wc="reset" val="Play Again" Bc="reset" ty="Reset" />
          <ButtonComp Wc="exit" val="exit" Bc="exit" ty="Exit" />
        </div>
      </div>

      <audio ref={ref}>
        <source src={AUD} type="audio/mp3" />
      </audio>
      <Confetti width={width} height={height} />
    </div>
  );
};
export { Win };
