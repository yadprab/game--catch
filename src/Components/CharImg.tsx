import { motion } from "framer-motion";
import { useContext } from "react";
import IMG from "../Images/dad.png";
import { countDown } from "./animation";
import { datacontext } from "./datacontext";
const CharImg = () => {
  const context = useContext(datacontext);
  return (
    <motion.div
      className="imag--char--var"
      variants={countDown}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => {
        context?.dispatch({ type: "Started" });
      }}
    >
      <div className="img--char">
        <img src={IMG} alt="" />
      </div>
      <p>Vaama minnal</p>
    </motion.div>
  );
};
export { CharImg };
