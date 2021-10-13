import { useContext, useEffect, useRef, useState } from "react";
import AUD from "../Audio/count3.wav";
import AUD2 from "../Audio/min.mp3";
import { ICount } from "../Interface/interface";
import { CharImg } from "./CharImg";
import { datacontext } from "./datacontext";
import { Number } from "./Number";
const Countdown = () => {
  const context = useContext(datacontext);
  const [Countdown, setCountdown] = useState<ICount["state"]>({
    three: true,
    two: false,
    one: false,
    img: false,
  });
  const countRef = useRef<HTMLAudioElement>(null);
  const countRef2 = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (Countdown.three) {
      (countRef.current as HTMLAudioElement).play();
    } else if (Countdown.two) {
      (countRef.current as HTMLAudioElement).play();
    } else if (Countdown.one) {
      (countRef.current as HTMLAudioElement).play();
    }
  }, [
    context?.state.positionSet,
    Countdown.one,
    Countdown.two,
    Countdown.three,
  ]);

  useEffect(() => {
    if (Countdown.img) {
      (countRef2.current as HTMLAudioElement).play();
    }
  }, [context?.state.positionSet, Countdown.img]);

  return (
    <div className="count--down--wrapper">
      {Countdown.three && (
        <Number val="3" set={setCountdown} state={Countdown} id="two" />
      )}
      {Countdown.two && (
        <Number val="2" set={setCountdown} state={Countdown} id="one" />
      )}
      {Countdown.one && (
        <Number val="1" set={setCountdown} state={Countdown} id="img" />
      )}
      {Countdown.img && <CharImg />}

      <audio style={{ display: "none" }} ref={countRef}>
        <source src={AUD} type="audio/wav" />
      </audio>
      <audio style={{ display: "none" }} ref={countRef2}>
        <source src={AUD2} type="audio/wav" />
      </audio>
    </div>
  );
};
export { Countdown };
