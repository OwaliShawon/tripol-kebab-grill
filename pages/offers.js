import Image from "next/image";
import React from 'react';
import styles from "../styles/Offers.module.css";

const Offers = () => {
  return (
    <div className={styles.container}>
      <h1>Offer Products</h1>
      <div className={styles.box}>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image
              src="/img/menu/Philadelphia.jpg"
              alt=""
              className={styles.product_img}
              width={300}
              height={200}
            />
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>Burra kebab</h3>
              <h4 className={styles.product_price}>180 tk</h4>
              <h4 className={styles.product_offer}>20%</h4>
              <p className={styles.product_quantity}>Qnt: <input value="1" name=""></input></p>
              <p className={styles.product_card_add}>
                <span className={styles.add_card}>Add Card</span>
              </p>

            </div>
          </div>
          <div className={styles.product}>
            <Image
              src="/img/menu/Philadelphia.jpg"
              alt=""
              width={300}
              height={200}
            />
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>Burra kebab</h3>
              <h4 className={styles.product_price}>180 tk</h4>
              <h4 className={styles.product_offer}>20%</h4>
              <p className={styles.product_quantity}>Qnt: <input value="1" name=""></input></p>
              <p className={styles.product_card_add}>
                <span className={styles.add_card}>Add Card</span>
              </p>

            </div>
          </div>
          <div className={styles.product}>
            <Image
              src="/img/menu/Philadelphia.jpg"
              alt=""
              width={300}
              height={200}
            />
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>Burra kebab</h3>
              <h4 className={styles.product_price}>180 tk</h4>
              <h4 className={styles.product_offer}>20%</h4>
              <p className={styles.product_quantity}>Qnt: <input value="1" name=""></input></p>
              <p className={styles.product_card_add}>
                <span className={styles.add_card}>Add Card</span>
              </p>

            </div>
          </div>
          <div className={styles.product}>
            <Image
              src="/img/menu/Philadelphia.jpg"
              alt=""
              width={300}
              height={200}
            />
            <div className={styles.product_info}>
              <h3 className={styles.product_name}>Burra kebab</h3>
              <h4 className={styles.product_price}>180 tk</h4>
              <h4 className={styles.product_offer}>20%</h4>
              <p className={styles.product_quantity}>Qnt: <input value="1" name=""></input></p>
              <p className={styles.product_card_add}>
                <span className={styles.add_card}>Add Card</span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;