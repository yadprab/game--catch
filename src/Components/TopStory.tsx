import { motion } from "framer-motion";
import { ISstate } from "../Interface/interface";
import { image, letter, sentence } from "./animation";

const TopStory = ({
  val,
  IMG,
  id,
  setval,
  classname,
}: {
  val: string;
  IMG: string;
  id: string;
  classname: string;
  setval: ISstate["state"];
}) => {
  const { storyState, setStoryState } = setval;
  return (
    <div className={classname}>
      <motion.p
        variants={sentence}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
          setStoryState({
            ...storyState,
            [id]: true,
          });
        }}
      >
        {val.split("").map((t, i) => {
          return (
            <motion.span key={`${t}-${i}`} variants={letter}>
              {t}
            </motion.span>
          );
        })}
      </motion.p>
      <motion.div
        className="image--area"
        variants={image}
        initial="hidden"
        animate="visible"
      >
        <img src={IMG} alt="character" />
      </motion.div>
    </div>
  );
};
export { TopStory };
