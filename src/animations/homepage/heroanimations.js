const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.3 },
  },
  hidden: { opacity: 0, y: 100 },
  transition: { when: "afterChildren" },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 },
  },
  hidden: { opacity: 0, y: 100 },
};

const buttonVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

const arrowVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.3 },
  },
  hidden: { opacity: 0, x: -50 },
};

const lineVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.3 },
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
