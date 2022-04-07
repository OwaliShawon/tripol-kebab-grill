import Image from "next/image";
import Link from "next/link";
import styles from "../styles/KebabCard.module.css";
import CardButton from "./CardButton";

const KebabCard = ({ kebab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href={`product/${kebab._id}`} passHref>
          <Image src={kebab.img} alt="" width="500" height="500" />
        </Link>
      </div>
      <h1 className={styles.title}>{kebab.title}</h1>
      <div className={styles.priceContainer}>
        <span className={styles.price}> Standard ${kebab.prices[0]}</span>
        <span className={styles.price}> Extra ${kebab.prices[1]}</span>
        <span className={styles.price}> Lawasz ${kebab.prices[2]}</span>
        <span className={styles.price}> Extra Lawasz ${kebab.prices[3]}</span>
      </div>
      <p className={styles.desc}>{kebab.desc}</p>
      <CardButton kebab={kebab}></CardButton>
    </div>
  );
};

export default KebabCard;
