import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import styles from "../../styles/Product.module.css";

const Product = ({ kebab }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(kebab.prices[0]);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...kebab, extras, price, quantity }));
    console.log(kebab);
  };

  const changePrice = (extraOptionPrice) => {
    setPrice(price + extraOptionPrice);
  };

  const handleSize = (sizeIndex) => {
    const difference = kebab.prices[sizeIndex] - kebab.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleQuantity = (e) => {
    const quantity = e.target.value;
    if (quantity > 0) {
      setQuantity(quantity);
    } else {
      e.target.value = 1;
    }
  };

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
          {kebab.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id={option.text}
                name={option.text}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
              <label htmlFor="double">+ ${option.price}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
            onChange={(e) => handleQuantity(e)}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://tripolkebab.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      kebab: res.data,
    },
  };
};

export default Product;
