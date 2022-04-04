const titleVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

const descriptionVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

const buttonVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.2 },
  },
  hidden: { opacity: 0, y: 100 },
};

export { titleVariants, descriptionVariants, buttonVariants };
