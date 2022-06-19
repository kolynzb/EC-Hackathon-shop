import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Products from "../../components/Products";
import styles from "../../styles/Shop.module.css";
const shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop Native Kampala</title>
        <meta name="description" content="Contact Native" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.shopPage}>
        <aside className={styles.left}>
          <_Sidebar />
        </aside>
        <Right />
      </div>
    </>
  );
};

export default shop;
const _Sidebar = () => (
  <div className={styles.Sidebar}>
    <ByCategory />
    <ByColor />
    <BySize />
    <ByPrice />
  </div>
);

const ByCategory = () => {
  const [showDets, setShowDets] = useState(false);
  return (
    <div className="sidebarSect">
      <div className={styles.titleSect}>
        <h1 className={styles.title}>Filter by category</h1>
        <div className="SideIcon" onClick={() => setShowDets(!showDets)}>
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      {showDets && (
        <div className="sectContent">
          <span className={styles.categoryName}>jacket</span>
          <span className={styles.categoryName}>men</span>
          <span className={styles.categoryName}>woman</span>
        </div>
      )}
      <div className={styles.sectLine}></div>
      <style jsx>{`
        .sectContent {
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }
        .SideIcon {
          font-size: 20px;
          color: #707070;
          cursor: pointer;
          transition: all 0.2s ease;
          transform: ${!showDets ? "rotate(0)" : "rotate(90deg)"};
        }
      `}</style>
    </div>
  );
};
const ByColor = () => {
  const [showDets, setShowDets] = useState(false);

  const colors = ["red", "green", "black", "white"];
  return (
    <div className="sidebarSect">
      <div className={styles.titleSect}>
        <h1 className={styles.title}>Filter by color</h1>
        <div className="SideIcon" onClick={() => setShowDets(!showDets)}>
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      {showDets && (
        <div className="sectContent">
          <div className={styles.colors}>
            {colors.map((color, i) => (
              <ColorCircle key={i} color={color} />
            ))}
          </div>
        </div>
      )}
      <div className={styles.sectLine}></div>
      <style jsx>{`
        .sectContent {
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }
        .SideIcon {
          font-size: 20px;
          color: #707070;
          cursor: pointer;
          transition: all 0.2s ease;
          transform: ${!showDets ? "rotate(0)" : "rotate(90deg)"};
        }
      `}</style>
    </div>
  );
};

type ColorCircleProps = {
  color: string;
};
const ColorCircle = (props: ColorCircleProps) => (
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
const BySize = () => {
  const [showDets, setShowDets] = useState(false);
  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  return (
    <div className="sidebarSect">
      <div className={styles.titleSect}>
        <h1 className={styles.title}>Filter by size</h1>
        <div className="SideIcon" onClick={() => setShowDets(!showDets)}>
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      {showDets && (
        <div className="sectContent">
          <div className={styles.sizebtns}>
            {sizes.map((size, i) => (
              <SizeBtn key={i}>{size}</SizeBtn>
            ))}
          </div>
        </div>
      )}
      <div className={styles.sectLine}></div>
      <style jsx>{`
        .sectContent {
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }
        .SideIcon {
          font-size: 20px;
          color: #707070;
          cursor: pointer;
          transition: all 0.2s ease;
          transform: ${!showDets ? "rotate(0)" : "rotate(90deg)"};
        }
      `}</style>
    </div>
  );
};

type SizeBtnProps = {
  children: any;
};
const SizeBtn = (props: SizeBtnProps) => (
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
const ByPrice = () => {
  const [showDets, setShowDets] = useState(false);
  return (
    <div className="sidebarSect">
      <div className={styles.titleSect}>
        <h1 className={styles.title}>Filter by price</h1>
        <div className="SideIcon" onClick={() => setShowDets(!showDets)}>
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
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      {showDets && (
        <div className="sectContent">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange"
          />
          <div className="priceRange">
            <p>
              <span>Min Price : </span> UGX25{" "}
            </p>
            <p>
              <span>Max Price :</span> UGX125{" "}
            </p>
          </div>
        </div>
      )}
      <div className={styles.sectLine}></div>
      <style jsx>{`
        .priceRange > p > span {
          font-weight: 300;
        }
        .slider {
          -webkit-appearance: none;
          width: 100%;
          height: 5px;
          border-radius: 20px;
          background: #8d8d8d;
          outline: none;
          opacity: 0.7;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
        }

        .slider:hover {
          opacity: 1;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: #000000;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          background: #4caf50;
          cursor: pointer;
        }
        .sectContent {
          margin-bottom: 10px;
          transition: all 0.2s ease;
        }
        .SideIcon {
          font-size: 20px;
          color: #707070;
          cursor: pointer;
          transition: all 0.2s ease;
          transform: ${!showDets ? "rotate(0)" : "rotate(90deg)"};
        }
      `}</style>
    </div>
  );
};

const Right = () => (
  <div className={styles.right}>
    <h1 className={styles.PgTitle}>Native Store</h1>

    <div className={styles.Content}>
      <div className={styles.Header}>
        <p className={styles.category}>Home/all-categories</p>
        <div className={styles.sortGroup}>
          <select>
            <option value="default">Default Sorting</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
          <div className={styles.Line}></div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zM464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm0 400H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16z"></path>
              </svg>
            </div>
            <div className={styles.icon}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="0.95em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.products}>
        <Products />
      </div>
    </div>
  </div>
);
