const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 },
  },
  hidden: { opacity: 0, y: 100 },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 },
  },
  hidden: { opacity: 0, y: 100 },
};

const buttonVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 },
  },
  hidden: { opacity: 0, y: 100 },
};

const arrowVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.7 },
  },
  hidden: { opacity: 0, x: -50 },
};

const lineVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.8 },
  },
  hidden: { opacity: 0 },
};

export {
  titleVariants,
  buttonVariants,
  descriptionVariants,
  arrowVariants,
  lineVariants,
};
