import Image from "next/image";
import Link from "next/link";
import styles from "../styles/KebabCard.module.css";

const KebabCard = ({ kebab }) => {
  console.log(kebab);
  return (
    <div className={styles.container}>
      <Link href={`product/${kebab._id}`} passHref>
        <Image src={kebab.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{kebab.title}</h1>
      <span className={styles.price}>${kebab.prices[0]}</span>
      <p className={styles.desc}>{kebab.desc}</p>
    </div>
  );
};

export default KebabCard;
