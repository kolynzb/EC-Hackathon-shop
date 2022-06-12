import { useRouter } from "next/router";
import styles from "../../styles/ProductDets.module.css";
import Socialsbar from "../../components/Socialsbar";
import CommonBtn from "../../components/CommonBtn";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import data from "../../dummydata/data";
import Image from "next/image";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const productItem = data.filter((product) => product.id == id)[0];

  return (
    <div className={styles.ProductPg}>
      <div className={styles.top}>
        {productItem && (
          <>
            <Left product={productItem} />
            <Right product={productItem} />
          </>
        )}
      </div>
      <div className={styles.description}>
        <h1 className={styles.descTitle}>Description</h1>
        <div className={styles.descBody}>
          Brand Name: Native Sport-lux bra and pant <br />
          Underwear Color: White
          <br />
          Item Type: Underwear
          <br />
          Gender: Female
          <br />
          Package include: 1X bra and 1X underwear
          <br />
          100% new brand, nice quality.
          <br />
          Made of stretchable cotton
          <br />
          Super-soft elastic band for comfort and movement.
          <br />
          Suitable for spinning, yoga, pilates or Weight training, exercise,
          fitness, everyday use.
          <br />
          Machine wash and turbo dry.
        </div>
        <div className={styles.relatedProducts}>
          <h1 className={styles.relatedTitle}>Related products</h1>
          <div className={styles.products}>
            {data.slice(19, 22).map((product) => (
              <ProductCard
                img={product.img}
                name={product.name}
                price={product.price}
                key={product.id}
                id={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

const Left = ({ product }) => {
  const [productCount, setProductCount] = useState(0);
  const sizes = product?.sizes;
  const colors = product?.colors;
  const dispatch = useDispatch();
  return (
    <div className={styles.left}>
      <h1 className={styles.Title}>{product?.name} </h1>
      <p className={styles.price}>UGX{product?.price}</p>
      <p className={styles.color}>
        Color : <span className={styles.colorName}>black</span>
      </p>
      <div className={styles.colors}>
        {colors.map((color, i) => (
          <ColorCircle key={i} color={color} />
        ))}
      </div>
      <p className={styles.color}>
        Size : <span className={styles.colorName}>XL</span>
      </p>
      <div className={styles.sizebtns}>
        {sizes.map((size, i) => (
          <SizeBtn key={i}>{size}</SizeBtn>
        ))}
      </div>
      <div className={styles.bottombtns}>
        <AddProductsbtns count={productCount} setCount={setProductCount} />
        <div onClick={() => dispatch(addToCart(product.id))}>
          <CommonBtn
            backgroundColor="black"
            txtColor="white"
            fontSize="14"
            wide="9"
            long="15"
          >
            Add to Cart
          </CommonBtn>
        </div>
        <div className={styles.heartBtn}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </div>
      </div>
      <p className={styles.share}>
        Share :
        <span>
          <Socialsbar />
        </span>
      </p>
    </div>
  );
};
const ColorCircle = (props) => (
  <div className="colorCircle">
    <style jsx>{`
      .colorCircle {
        background: ${props.color};
        height: 20px;
        cursor: pointer;
        width: 20px;
        border-radius: 50%;
        margin-right: 5px;
        border: 1px solid ${props.color === "white" && "black"};
        transition: all 0.3s ease-in-out;
      }
      .colorCircle:hover {
        transform: scale(1.09);
      }
    `}</style>
  </div>
);
const SizeBtn = (props) => (
  <button className="button">
    {props.children}
    <style jsx>{`
      button {
        border: 2px solid gray;
        border-radius: 5px;
        font-weight: bold;
        color: gray;
        cursor: pointer;
        height: 30px;
        width: 40px;
        background: white;
        margin-right: 5px;
        margin-bottom: 5px;
        transition: all 0.3s ease-in-out;
      }
      button:hover {
        transform: scale(1.09);
      }
    `}</style>
  </button>
);
const AddProductsbtns = ({ count, setCount }) => {
  return (
    <div className="productNumber">
      <div className="add" onClick={() => setCount((count += 1))}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          t="1551322312294"
          viewBox="0 0 1024 1024"
          version="1.1"
          pId="10297"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs></defs>
          <path
            d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
            pId="10298"
          ></path>
          <path
            d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
            pId="10299"
          ></path>
        </svg>
      </div>
      <div className="products">{count}</div>
      <div
        className="subtract"
        onClick={() => count > 0 && setCount((count -= 1))}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
      <style jsx>{`
        .add,
        .subtract {
          font-size: 15px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .productNumber {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: solid 1px gray;
          width: 80px;
          height: 36px;
          padding: 0 5px;
        }
        .products {
          font-size: 20px;
        }
        .product {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          width: 500px;
        }
      `}</style>
    </div>
  );
};
const Right = ({ product }) => (
  <div className={styles.right}>
    <Image src={product?.img} alt={product?.name} width={300} height={450} />
  </div>
);
