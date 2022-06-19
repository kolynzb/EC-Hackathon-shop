import Link from "next/link";
import styles from "../styles/components/CartSideBar.module.css";
import CommonBtn from "./CommonBtn";
import CloseButton from "./CloseButton";
import ProductSmall from "./ProductSmall";
import { useAppSelector } from "../hooks/reduxHooks";

type CartSideBarProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartSideBar = ({ setShow }: CartSideBarProps) => {
  const items = useAppSelector((state) => state.cart.cart);
  const cartItems = items![0];
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.cartSidebar}>
        <header className={styles.cartHeader}>
          <h1 className={styles.headerTitle}>Cart</h1>
          <div onClick={() => setShow(false)}>
            <CloseButton />
          </div>
        </header>
        <div className={styles.main}>
          {!(items!.length === 0) ? (
            <InhabitedCart cartItems={cartItems} />
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;

const EmptyCart = () => (
  <div className={styles.emptyCart}>
    <div className={styles.cartIcon}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    </div>
    <h2 className={styles.subtitle}>No products in cart</h2>
    <button className={styles.contdShopping}>Continue Shopping</button>
  </div>
);
const InhabitedCart = ({ cartItems }) => (
  <div className={styles.inhabited}>
    <div className={styles.Subtotal}>
      <p className="subtotalTitle">Subtotal:</p>
      <p className={styles.subtotalPrice}>UGX138,000</p>
    </div>
    <div className={styles.products}>
      {cartItems.map((item) => (
        <ProductSmall
          small="425"
          name={item.name}
          price={item.price}
          key={item.id}
          img={item.img}
        />
      ))}
    </div>
    <div className={styles.space}></div>
    <div className={styles.space}></div>
    <div className={styles.space}></div>
    <div className={styles.space}></div>
    <div className={styles.inhabitedbtns}>
      <CommonBtn wide="10">
        <Link href="/cart" passHref>
          View Cart
        </Link>
      </CommonBtn>

      <div className={styles.space}></div>
      <CommonBtn
        txtColor="white"
        backgroundColor="black"
        hoverBackgroundColor="white"
      >
        Checkout
      </CommonBtn>
    </div>
  </div>
);
