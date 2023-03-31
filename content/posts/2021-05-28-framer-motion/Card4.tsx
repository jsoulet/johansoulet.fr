import React, { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from 'components/Button'
import * as styles from "./Card.module.scss";

interface CardProps {
  title: string;
  desc: string;
  category: string;
  price: string;
  image: string;
}

const bounceVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      childrenDelay: 0.2,
      staggerChildren: 0.2,
    }
  }
};

const opacityVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: "50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.8,
    }
  }
};

const Card: FC<CardProps> = ({ image, title, category, price, desc }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [inView, controls]);
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      variants={bounceVariants}
      animate={controls}
      ref={ref}
    >
      <motion.img src={image} className={styles.image} alt="" variants={opacityVariants}/>
      <div className={styles.content}>
        <motion.div className={styles.title} variants={bounceVariants}>{title}</motion.div>
        <motion.div className={styles.subtitle} variants={bounceVariants}>
          {price} • {category}
        </motion.div>
        <motion.div className={styles.desc} variants={bounceVariants}>{desc}</motion.div>
        <motion.div
          className={styles.button}
          variants={fadeUpVariants}
        >
          <Button color="green">Book</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;