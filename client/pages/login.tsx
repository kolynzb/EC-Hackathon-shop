import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBtn from "../components/CommonBtn";
import styles from "../styles/Login.module.css";
import { llogin } from "../store/slices/userSlice";
import { NextPage } from "next";

const login: NextPage = () => {
  return (
    <div className={styles.loginPg}>
      <_LoginSect />
      <_Register />
    </div>
  );
};

export default login;

const _LoginSect = () => {
  const [userr, setUserr] = useState({});
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(llogin(userr));
  };
  const handleChange = (e) => {
    setUserr({ ...userr, email: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUserr({ ...userr, password: e.target.value });
  };
  return (
    <form className={styles.login} onSubmit={handleLogin}>
      <h1 className={styles.sectionTitle}>Login</h1>
      <Inputt onChange={handleChange}>Username or email address*</Inputt>
      <div className={styles.space}></div>

      <Inputt onChange={handleChangePassword} type="password">
        Password*
      </Inputt>
      <div className={styles.space}></div>
      <div className={styles.txtsect}>
        <div className={styles.inputt}>
          <input type="checkbox" name="RememberMe" value="checked_value" />
          <label htmlFor="RememberMe">Remember Me</label>
        </div>
        <p className={styles.para}>Lost your password?</p>
      </div>
      <div>
        <CommonBtn
          backgroundColor="#282828"
          txtColor="white"
          long="130"
          wide="8"
        >
          Login
        </CommonBtn>
      </div>
    </form>
  );
};
const _Register = () => (
  <form className={styles.register}>
    <h1 className={styles.sectionTitle}>Register</h1>
    <Inputt type="email">Email Address*</Inputt>
    <div className={styles.textSect}>
      <p className={styles.text}>
        A password will be sent to your email address.
      </p>
      <div className={styles.inputt}>
        <input type="checkbox" name="newsletter" value="checked_value" />{" "}
        <label htmlFor="newsletter">Subscribe to our newsletter</label>
      </div>
      <p className={styles.para2}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </p>
    </div>
    <CommonBtn backgroundColor="#282828" txtColor="white" long="110" wide="10">
      Register
    </CommonBtn>
  </form>
);
const Inputt = (props) => {
  return (
    <div className="form">
      <input onChange={props.onChange} type={props.type} required />
      <label htmlFor={props.type} className="label-name">
        <span className="content-name">{props.children}</span>
      </label>
      <style jsx>{`
        .form {
          width: 50%;
          height: 50px;
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
          transform: translateY(-115%);
        }
        @media screen and (max-width: 768px) {
          .content-name {
            font-size: 16px;
          }
          .form {
            width: 72%;
          }
        }
      `}</style>
    </div>
  );
};
