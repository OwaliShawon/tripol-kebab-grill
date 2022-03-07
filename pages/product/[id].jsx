import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = ({ kebab }) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(kebab.prices[0]);


    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handleSize = (sizeIndex) => {
        // console.log(sizeIndex);
        const difference = kebab.prices[sizeIndex] - kebab.prices[size];
        // console.log(difference);
        setSize(sizeIndex);
        changePrice(difference);
    }


    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.price);
        } else {
            changePrice(-option.price);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={kebab.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{kebab.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{kebab.desc}</p>

                {/* product sizes */}
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                {/* ingredients  */}
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {
                        kebab.extraOptions.map(option => (
                            <div className={styles.option} key={option._id}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    onChange={(e) => handleChange(e, option)}
                                />
                                <label htmlFor="double">{option.text}</label>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            kebab: res.data
        }
    }
};

export default Product;