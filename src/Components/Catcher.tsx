import { motion } from "framer-motion";
import { useCallback, useContext, useLayoutEffect, useRef } from "react";
import { datacontext } from "./datacontext";
const Catcher = () => {
  const context = useContext(datacontext);
  const ref = useRef<SVGSVGElement>(null);

  const getVal = useCallback(() => {
    const val = (ref.current as SVGSVGElement).getBoundingClientRect();
    if (context?.state.positionSet) {
      context.dispatch({
        type: "PoVal",
        payload: {
          x: val.x,
          y: val.y,
          width: val.width,
          height: val.height,
          top: val.top,
          right: val.right,
          bottom: val.bottom,
          left: val.left,
        },
      });
    }
    // eslint-disable-next-line
  }, [context?.state.positionSet]); // eslint-disable-next-line

  useLayoutEffect(() => {
    getVal();
  }, [getVal]);

  return (
    <motion.svg
      ref={ref}
      drag={context?.state.positionSet ? false : "x"}
      width={166}
      height={559}
      viewBox="0 0 166 559"
      fill="none"
      id="catcher"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={166}
        height={559}
      >
        <rect
          width={166}
          height={559}
          transform="matrix(-1 0 0 1 166 0)"
          fill="url(#pattern0)"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect width={166} height={559} fill="white" />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0"
            transform="translate(-0.0293561) scale(0.00637778 0.00189394)"
          />
        </pattern>
        <image
          id="image0"
          width={166}
          height={528}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </motion.svg>
  );
};
export { Catcher };
