import {
    PayPalButtons,
    PayPalScriptProvider, usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";



const Cart = () => {
    // const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    // This values are the props in the UI
    const amount = cart.total;
    const currency = "PLN";
    const style = { "layout": "vertical" };

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
            {(showSpinner && isPending) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        console.log(details);
                    });
                }}
            />
        </>
        );
    }



    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {
                            cart.products.map((product) => (
                                <tr className={styles.tr} key="_id">
                                    <td>
                                        <div className={styles.imgContainer}>
                                            <Image
                                                src={product.img}
                                                layout="fill"
                                                objectFit="cover"
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <span className={styles.name}>{product.title}</span>
                                    </td>
                                    <td>
                                        <span className={styles.extras}>
                                            {product.extras.map((extra) => (
                                                <span key={extra._id}>{extra.text}.. </span>
                                            ))}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={styles.price}>${product.price}</span>
                                    </td>
                                    <td>
                                        <span className={styles.quantity}>${product.quantity}</span>
                                    </td>
                                    <td>
                                        <span className={styles.total}>${product.price * product.quantity}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>${cart.total}
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.00
                    </div>
                    <br />
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Sub Total:</b>${cart.total}
                    </div>
                    {
                        open ? (
                            <div className={styles.paymentMethods}>
                                <button
                                    className={styles.payButton}
                                    onClick={() => setCash(true)}
                                >
                                    CASH ON DELIVERY
                                </button>
                                <PayPalScriptProvider
                                    options={{
                                        "client-id":
                                            "ATfFBZSEiHF2uLUHjQMFjnXs5ISFm9tnezQHKmxmItWuLBKE7dxwNMS6c4aw6RGo7Gv-oon85QYkwvZo",
                                        components: "buttons",
                                        currency: "PLN",
                                        "disable-funding": "credit,card",
                                        "enable-funding": "p24",
                                    }}
                                >
                                    <ButtonWrapper currency={currency} showSpinner={false} />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT NOW!</button>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Cart;
