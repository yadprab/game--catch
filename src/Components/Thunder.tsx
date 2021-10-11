import { motion, useAnimation } from "framer-motion";
import { useCallback, useContext, useEffect, useRef } from "react";
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

  useEffect(() => {
    context?.state.positionSet ? start() : stop();
  }, [context?.state.positionSet, stop, start]);
  return (
    <>
      <motion.div className="thunder" ref={ref} animate={controls}>
        <img src={IMG} alt="" id="thunder--img" />
      </motion.div>
    </>
  );
};
export { Thunder };
