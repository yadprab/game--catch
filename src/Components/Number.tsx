import { motion } from "framer-motion";
import { ICount } from "../Interface/interface";
import { countDown } from "./animation";

const Number = ({
  val,
  set,
  id,
  state,
}: {
  id: string;
  val: string;
  state: ICount["state"];
  set: React.Dispatch<React.SetStateAction<ICount["state"]>>;
}) => {
  return (
    <motion.p
    variants={countDown}
    initial='hidden'
    animate='visible'
    exit="exit"
      onAnimationComplete={() => {
        set({
          ...state,
          [id]: true,
        });
      }}
      transition={{ delay: 0.3 }}
    >
      {val}
    </motion.p>
  );
};
export { Number };
