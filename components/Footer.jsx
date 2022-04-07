import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/kebab-footer.jpg"
          objectFit="fill"
          layout="fill"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>TRIPOL KEBAB & GRILL</h1>
          <h2 className={styles.motto}>KUCHNIA LIBANSKA</h2>
        </div>
        {/* addresses of restaurants */}
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <h4 className={styles.text}>
            Wańkowicza 3C
            <br /> 96-100 Skierniewice
            <h3>500 565 652</h3>
          </h4>
          <hr />
          <h4 className={styles.text}>
            plac Kościuszki 19a
            <br /> 26-340 Drzewica
            <h3>729 379 234</h3>
          </h4>
        </div>
        {/* time and schedule */}
        <div className={styles.card}>
          <h1 className={styles.title}>Opening Hours</h1>
          <p className={styles.text}>
            SATURDAY
            <br /> 10:00 – 24:00
          </p>
          <p className={styles.text}>
            SUNDAY
            <br /> 11:00 – 24:00
          </p>
          <p className={styles.text}>
            MONDAY
            <br /> 11:00 – 24:00
          </p>
          <p className={styles.text}>
            TUESDAY
            <br /> 11:00 – 24:00
          </p>
          <p className={styles.text}>
            WEDNESDAY
            <br /> 11:00 – 24:00
          </p>
          <p className={styles.text}>
            THURSDAY
            <br /> 11:00 – 24:00
          </p>
          <p className={styles.text}>
            FRIDAY
            <br /> 11:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
