const imageVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0 },
};

const arrowLeftVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.4 },
  },
  hidden: { opacity: 0, x: 200 },
};

const arrowRightVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.4 },
  },
  hidden: { opacity: 0, x: -200 },
};

export { imageVariants, arrowLeftVariants, arrowRightVariants };
