import { useState } from "react";
import { ICount } from "../Interface/interface";
import { CharImg } from "./CharImg";
import { Number } from "./Number";
const Countdown = () => {
  const [Countdown, setCountdown] = useState<ICount["state"]>({
    three: true,
    two: false,
    one: false,
    img: false,
  });
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
    </div>
  );
};
export { Countdown };
