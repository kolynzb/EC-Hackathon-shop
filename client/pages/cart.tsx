import CommonBtn from "../components/CommonBtn";
import ProductSmall from "../components/ProductSmall";
import styles from "../styles/Cart.module.css";
import Link from "next/link";

import { NextPage } from "next";
import { useAppSelector } from "../hooks/reduxHooks";
import { Product } from "../interfaces/Product.interface";
import Head from "next/head";
const Cart: NextPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);
  return (
    <>
      <Head>
        <title>Shopping Cart Native Kampala</title>
        <meta name="description" content="Your Native  Cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.cart}>
        <h1 className={styles.pgTitle}>Cart</h1>

        {/* {cartItems!.length === 0 ? ( */}
        {cartItems ? (
          <EmptyCart />
        ) : (
          <div className={styles.content}>
            <div className={styles.cartleft}>
              <CartItems />
            </div>
            <div className={styles.cartRight}>
              <CartTotalCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

const CartTotalCard = () => (
  <div className={styles.card}>
    <h4 className={styles.totalTitle}>Cart totals</h4>
    <div className={styles.sect}>
      <h3 className={styles.sectionTitle}>SubTotal</h3>
      <span className="subtotal">UGX134,492</span>
    </div>
    <div className="line"></div>
    <h3 className={styles.sectionTitle}>Shipping</h3>
    <div className="radioBTns">
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        Around Kampala: <span className="price">UGX14,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="local pickup" />
        Local Pickup: <span className="price">UGX3,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        Up Country(UG): <span className="price">UGX30,000</span>
      </div>
      <br />
      <div className="radioBtn">
        <input type="radio" name="Shipping" value="around kla" />
        International: <span className="price">UGX100,000</span>
      </div>
      <br />
    </div>
    <p className={styles.info}>
      Shipping options will be updated during checkout.
    </p>
    <div className="line "></div>
    <div className={styles.sect}>
      <h3 className={styles.sectionTitle}>Total </h3>
      <span className="total">UGX148,492</span>
    </div>
    <div className="line line2"></div>
    <CommonBtn
      txtColor="white"
      backgroundColor="black"
      hoverBackgroundColor="white"
      fontSize={17}
    >
      Proceed to Checkout
    </CommonBtn>
    <style jsx>{`
      .line {
        background-color: #828282;
        height: 1px;
        width: 100%;
      }
      .line2 {
        margin-bottom: 20px;
      }
      .total {
        font-weight: 600;
      }
      .subtotal {
        color: #8d8d8d;
        font-weight: 400;
      }
      .price {
        font-size: 16px;
        font-weight: 300;
        margin-left: 20px;
      }
    `}</style>
  </div>
);
const CartItems = () => {
  const cartItems = useAppSelector((state) => state.cart.cart);

  return (
    <div className={styles.cartItems}>
      <Link href="/shop" passHref>
        <div className={styles.cndtShopping}>
          <div className={styles.icon}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
            </svg>
          </div>
          <p>Continue Shopping</p>
        </div>
      </Link>
      <div className="line"></div>
      <div className={styles.cartItemsSection}>
        {/* {cartItems!.map((itemm) =>
          itemm!.map((item: Product) => (
            <ProductSmall
              name={item.name}
              price={item.price}
              key={item.id}
              id={item.id}
              img={item?.img}            />
          ))
        )} */}
        {cartItems!.map((item: Product) => (
          <ProductSmall
            name={item.name}
            price={item.price}
            key={item.id}
            id={item.id}
            img={item?.img}
          />
        ))}
      </div>
      <style jsx>{`
        .line {
          background-color: #828282;
          height: 1px;
          width: 90%;
        }
      `}</style>
    </div>
  );
};

const EmptyCart = () => (
  <div>
    <div className="line"></div>
    <p className="empty">No products added to Cart</p>
    <div className="line"></div>

    <style jsx>{`
      .line {
        background-color: #828282;
        height: 1px;
        width: 100%;
      }
      .empty {
        margin: 40px 0;
        color: black;
      }
    `}</style>
  </div>
);
