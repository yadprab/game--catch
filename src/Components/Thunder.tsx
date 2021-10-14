import { motion, useAnimation } from "framer-motion";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { useWindowSize } from "react-use";
import soundfile from "../Audio/thun2.wav";
import IMG from "../Images/thunderCh.png";
import { datacontext } from "./datacontext";
const Thunder = () => {
  const controls = useAnimation();
  const { width } = useWindowSize();
  const ref = useRef<HTMLImageElement>(null);
  const soundRef = useRef<HTMLAudioElement>(null);
  const context = useContext(datacontext);
  const start = useCallback(() => {
    controls.start({
      x: width,
      transition: { repeat: Infinity, duration: 0.4 },
    });
    (soundRef.current as HTMLAudioElement).play();
  }, [controls, width]);

  const stop = useCallback(() => {
    controls.stop();
    (soundRef.current as HTMLAudioElement).pause();
  }, [controls]);

  const getTunder = useCallback(() => {
    const val = (ref.current as HTMLImageElement).getBoundingClientRect();

    if (context?.state.gameStop) {
      const v = JSON.stringify(val);

      const v2 = JSON.stringify(context.state.catcherPosition);
      if (v2 === v) {
        context.dispatch({ type: "ResultWin" });
      } else {
        context.dispatch({ type: "ResultLose" });
      }
    }
    // eslint-disable-next-line
  }, [context?.state.gameStop, context?.state.catcherPosition]);

  useEffect(() => {
    !context?.state.gameStop ? start() : stop();
  }, [context?.state.gameStop, stop, start]);

  useLayoutEffect(() => {
    getTunder();
  }, [getTunder]);
  return (
    <>
      <motion.img
        src={IMG}
        alt=""
        id="thunder--img"
        ref={ref}
        animate={controls}
      />
      <audio ref={soundRef} loop>
        <source src={soundfile} type="audio/wav" />
      </audio>
    </>
  );
};
export { Thunder };
