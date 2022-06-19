import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import delivery from "../assets/Images/delivery.png";
import imageOne from "../assets/Images/1.JPG";
import imageTwo from "../assets/Images/2.JPG";
import imageThree from "../assets/Images/3.JPG";
import pageBanner from "../assets/Images/inpagebanner.JPG";
import logo from "../assets/Images/logo.png";
import data from "../dummydata/data";
import ProductCard from "../components/ProductCard";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Native Kampala</title>
        <meta name="description" content="Stylist Ankara" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <_NativeClothingSection />
        <h1 className={styles.sectionTitle}>Our top picks for you</h1>
        <_ProductSectionOne />
        <_InPageBanner />
        <_ProductSectionTwo />
        <Image src={delivery} alt="delivery" />
      </main>
    </div>
  );
};

const _ProductSectionOne = () => (
  <div className={styles.productSection}>
    {data.slice(11, 15).map((product) => (
      <ProductCard
        img={product.img}
        name={product.name}
        price={product.price}
        key={product.id}
        id={product.id}
      />
    ))}
  </div>
);
const _ProductSectionTwo = () => (
  <div className={styles.productSection}>
    {data.slice(16, 20).map((product) => (
      <ProductCard
        img={product.img}
        name={product.name}
        price={product.price}
        key={product.id}
        id={product.id}
      />
    ))}
  </div>
);
const _NativeClothingSection = () => (
  <section className={styles.nativeClothingSection}>
    <h1 className={styles.sectionTitle}>Native Clothing</h1>
    <p className={styles.subtitle}>
      Enjoy 10% off on all our products. Pay less and buy more today.
    </p>
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image src={imageOne} alt="imageone" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.card}>
        <Image src={imageTwo} alt="imageTwo" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.card}>
        <Image src={imageThree} alt="imageThree" width={350} height={550} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  </section>
);
const _InPageBanner = () => (
  <div className={styles.inpagebanner}>
    <Image src={pageBanner} alt="pagebanner" />
    <div className={styles.Logo}>
      <Image src={logo} alt="logo" width={300} height={400} />
    </div>
  </div>
);

export default Home;
