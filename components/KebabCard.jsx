import Image from "next/image";
import styles from "../styles/KebabCard.module.css";

const KebabCard = ({ kebab }) => {
    return (
        <div className={styles.container}>
            <Image src="/img/menu/Philadelphia.jpg" alt="" width="500" height="500" />
            <h1 className={styles.title}>{kebab.title}</h1>
            {/* <span className={styles.price}>${kebab.prices[0]}</span>
            <p className={styles.desc}>
                {kebab.desc}
            </p> */}
        </div>
    );
};

export default KebabCard;