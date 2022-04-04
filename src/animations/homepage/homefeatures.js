const imageVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

const lineVariants = {
  visible: {
    opacity: 0.2,
    transition: { duration: 0.2, delay: 0.3 },
  },
  hidden: { opacity: 0 },
};

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 },
  },
  hidden: { opacity: 0, y: 100 },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

export { imageVariants, lineVariants, titleVariants, descriptionVariants };
