import { FC } from "react";
import * as styles from "./Card.module.scss";

interface CardProps {
  title: string;
  desc: string;
  category: string;
  price: string;
  image: string;
}

const Card: FC<CardProps> = ({ image, title, category, price, desc }) => {
  return (
    <div
      className={styles.card}
    >
      <img src={image} className={styles.image} alt="" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.subtitle}>
          {price} • {category}
        </div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default Card;