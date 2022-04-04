const imageVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const numberVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.4 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  hidden: { opacity: 0, y: 100 },
};

export { imageVariants, numberVariants, titleVariants, descriptionVariants };
