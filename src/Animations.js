// this file contains all the animations used in the app

export const pageAnimations = {
  hidden: {
    opacity: 0,
    y: 300,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,

      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    scale: 0.5,
    transition: {
      duration: 0.75,
    },
  },
};

export const hoverVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      zIndex: 1,
    },
  };
  export const scaleUp = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  export const listItemVariants = {
    initial: { opacity: 1, y: 0, rotateZ: 0 },
    deleted: { opacity: 0, y: "10rem", rotateZ: 20 },
  };
  