import styles from "../styles/components/Banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import hero from "../public/Images/hero.png";
import bannerO from "../assets/Images/banner1.JPG";
import bannerT from "../public/Images/banner2.jpg";
import bannerTH from "../public/Images/banner3.jpg";
import bannerF from "../assets/Images/banner4.JPG";
const Banner = () => {
  return (
    <div className={styles.Banner}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 8000 }}
        loop={true}
        lazy={true}
      >
        {/* <SwiperSlide className={styles.swiperSlide}>
          <Image src={hero} className={styles.bannerImage} alt="Vercel Logo" />
        </SwiperSlide> */}
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={bannerO}
            className={styles.bannerImage}
            alt="Vercel Logo"
            layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={bannerT}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={bannerTH}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide>
        {/* <SwiperSlide className={styles.swiperSlide}>
          <Image
            src={bannerF}
            className={styles.bannerImage}
            alt="Vercel Logo"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
