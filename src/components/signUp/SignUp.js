import React from "react";
import styles from "./SignUp.module.css";
import logo from "../../images/logo11rounds.jpg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={styles.landing}>
      <div className={styles.containerSignup}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.text}>
          <h1>Welcome, Sign-Up to continue ☘.......</h1>
          <div className={styles.lime1}>
            <div className={styles.lime2}>
              <div className={styles.lime3}></div>
            </div>
          </div>
        </div>

        <h2>Fill in the below form to get signed-Up</h2>

        <div className={styles.form}>
          <form action="">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" />

            <br />
            <label htmlFor="surName">SurName:</label>
            <input type="text" />

            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" />

            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" />
            <br />

            <label htmlFor="password">
              Password:
              <input type="password" />
            </label>

            <button className={styles.signup}>SIGN UP</button>
            <p>already have an account <Link to="/"><span className={styles.log}>Login</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
