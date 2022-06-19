import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import productsmall from "../assets/Images/productsmall.JPG";
import { Product } from "../interfaces/Product.interface";
import { removeFromCart } from "../store/slices/cartSlice";

type ProductSmallProps = {
  small?: string;
  img: Product["img"];
  name: Product["name"];
  price: Product["price"];
  id: Product["id"];
};
const ProductSmall = ({ small, name, price, id, img }: ProductSmallProps) => {
  const dispatch = useDispatch();
  return (
    <div className="productsmall">
      <div className="product">
        <div className="productimg">
          <Image
            src={img || productsmall}
            alt="product image"
            width={100}
            height={100}
          />
        </div>
        <div className="productInfo">
          <div className="productName">{name}</div>
          <div className="productPrice">UGX{price}</div>
          <div className="specs">
            <span className="color">Black</span>
            <span className="size">XL</span>
          </div>
        </div>
        <div className="productContorls">
          <Link href={`shop/${id}`} passHref>
            <button className="viewBtn">view</button>
          </Link>
          <button
            className="removeBtn"
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </button>
          <div className="productNumber">
            <div className="add">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                // t="1551322312294"
                viewBox="0 0 1024 1024"
                version="1.1"
                // pId="10297"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <path
                  d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
                  // pId="10298"
                ></path>
                <path
                  d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
                  // pId="10299"
                ></path>
              </svg>
            </div>
            <div className="products">1</div>
            <div className="subtract">
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
          </div>
        </div>
      </div>

      <div className="line"></div>
      <style jsx>{`
        .productsmall {
          width: 100%;
        }
        .line {
          background-color: #828282;
          height: 1px;
          width: 90%;
        }
        .productInfo {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 5px 0;
        }
        .specs > span {
          font-weight: 600;
          margin-right: 10px;
        }
        .products {
          font-size: 20px;
        }
        .product {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          width: ${small || 500}px;
        }
        .productPrice {
          color: #737272;
        }
        .productContorls {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 0;
        }
        .productNumber {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .viewBtn,
        .removeBtn {
          border-radius: 30px;
          text-transform: capitalize;
          background: white;
          transition: all 0.2s ease-in-out;
        }
        .viewBtn {
          border: #707070 solid 1px;
        }
        .removeBtn {
          border: #cf0303 solid 1px;
          color: #cf0303;
        }
        .removeBtn:hover {
          color: white;
          background: #cf0303dd;
        }
        .removeBtn:hover,
        .viewBtn:hover {
          transform: scale(1.05);
        }
        .add,
        .subtract {
          font-size: 15px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default ProductSmall;
