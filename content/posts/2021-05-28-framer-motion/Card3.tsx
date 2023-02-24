import React, { FC } from "react";
import { motion } from 'framer-motion'
import Button from 'components/Button/Button'
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
  return (
    <motion.div
      className={styles.card}
      initial="hidden"
      animate="visible"
      variants={bounceVariants}
    >
      <motion.img src={image} className={styles.image} alt="" variants={opacityVariants}/>
      <div className={styles.content}>
        <motion.h2 className={styles.title} variants={bounceVariants}>{title}</motion.h2>
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