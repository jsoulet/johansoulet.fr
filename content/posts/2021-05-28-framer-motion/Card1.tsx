import { FC } from "react";
import { motion } from 'framer-motion'
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
      repeat: Infinity,
      repeatDelay: 5
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
      <img src={image} className={styles.image} alt="" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>
          {price} • {category}
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </motion.div>
  );
};

export default Card;