import Image from "next/image";
import styles from "../styles/KebabCard.module.css";

const KebabCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/menu/Philadelphia.jpg" alt="" width="500" height="500" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    );
};

export default KebabCard;