import { motion, useAnimation } from "framer-motion";
import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import IMG from "../Images/thunderCh.png";
import { datacontext } from "./datacontext";
const Thunder = () => {
  const controls = useAnimation();

  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(datacontext);
  const start = useCallback(() => {
    controls.start({
      x: "-100vw",
      transition: { repeat: Infinity, duration: 0.4 },
    });
  }, [controls]);

  const stop = useCallback(() => {
    controls.stop();
  }, [controls]);

  const getTunder = useCallback(() => {
    const val = (ref.current as HTMLDivElement).getBoundingClientRect();
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
      <motion.div className="thunder" ref={ref} animate={controls}>
        <img src={IMG} alt="" id="thunder--img" />
      </motion.div>
    </>
  );
};
export { Thunder };
