import styles from "../styles/ContactUs.module.css";
import Image from "next/image";
import hero from "../public/Images/contactus.jpg";
import CommonBtn from "../components/CommonBtn";
import Socialsbar from "../components/Socialsbar";
const contactus = () => {
  return (
    <div>
      <ContactUsBanner />
      <div className={styles.contactSection}>
        <h1>Get In Touch</h1>
        <div className={styles.pgcontent}>
          <ContactForm />
          <div className={styles.mapSection}>
            <MapNative />

            <Socialsbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;

const ContactUsBanner = () => (
  <div className={styles.Banner}>
    <div className={styles.image}>
      <Image
        src={hero}
        className={styles.bannerImage}
        alt="contactus"
        width={2592}
        height={1728}
      />
      <div className={styles.overlay}></div>
    </div>
    <div className={styles.content}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"></path>
            </svg>
          </div>
          <div className={styles.info}>
            <p>Kishe Sapphire 7th Floor Kilumira, Hyberald,500084</p>
          </div>
        </div>

        {/* card 2 */}
        <div className={styles.card}>
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
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
          </div>
          <div className={styles.info}>
            <p>
              +254-76767676 <br /> +256-78433049,
            </p>
          </div>
        </div>
        <div className={styles.card}>
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
              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
            </svg>
          </div>
          <div className={styles.info}>
            <p>
              nativeKampala@gmail.com <br />
              native@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <form action="" className={styles.contactForm}>
    <Inputt type="name">Name*</Inputt>
    <div className={styles.space}></div>
    <Inputt type="tel">Phone Number*</Inputt>
    <div className={styles.space}></div>
    <Inputt type="email">Email Address*</Inputt>
    <div className={styles.space}></div>
    <textarea
      name="message"
      id=""
      className={styles.textarea}
      cols="30"
      rows="10"
      placeholder="Message"
    ></textarea>
    <div className={styles.space}></div>
    <CommonBtn
      txtColor="white"
      backgroundColor="black"
      hoverBackgroundColor="white"
      wide="6"
      fontSize="20"
    >
      Send Message
    </CommonBtn>
  </form>
);
const Inputt = (props) => {
  return (
    <div className="form">
      <input type={props.type} required />
      <label htmlFor={props.type} className="label-name">
        <span className="content-name">{props.children}</span>
      </label>
      <style jsx>{`
        .form {
          width: 100%;
          height: 40px;
          position: relative;
        }
        .form input {
          width: 100%;
          height: 100%;
          color: #8c8c8c;
          padding-top: 20px;
          border: none;
          outline: none;
        }
        .form label {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border: 2px solid #dddddd;
        }

        .content-name {
          font-size: 20px;
          position: absolute;
          left: 0;
          bottom: 5px;
          transition: all 0.3s ease;
          background-color: white;
          color: #8c8c8c;
        }
        .form input:focus + .label-name .content-name,
        .form input:valid + .label-name .content-name {
          transform: translateY(-60%);
        }
      `}</style>
    </div>
  );
};
const MapNative = () => (
  <div className={styles.mapnative}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2116.954236143084!2d32.59722929264831!3d0.3533398677126693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba4ee148c8d5%3A0xff7bf7c42297a661!2sKirabo%20Complex!5e0!3m2!1sen!2sug!4v1635600171685!5m2!1sen!2sug"
      width="500"
      height="340"
      loading="lazy"
    ></iframe>
  </div>
);
