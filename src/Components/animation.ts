export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const image = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.2,
    },
  },
};

export const countDown = {
  hidden: {
    scale: 10,
    opacity: 0,
  },
  visible: {
    scale: [10, 1, 0],
    opacity: [1, 0],

    transition: {
      duration: 1.5,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};
