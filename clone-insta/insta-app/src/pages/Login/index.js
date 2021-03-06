import React, { useState } from "react";
import cls from "./style.module.scss";
import "../../asset/fonts/font.css";
import classnames from "classnames";

function Login() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setName(value);
  };

  const handleKeyUp = (e) => {
    console.log(e);
    let value = e.target.value;
    if (e.key === "Enter" && value.trim()) {
      setName(value);
      setName("");
    }
  };

  return (
    <div className={cls.Login}>
      <section className={cls.main}>
        <div className={cls.background}>
          <div className={cls.frame}>
            <img src="../img/bg1.jpg" alt="pic" />
          </div>
        </div>
        <div>
          <div className={cls.form_login}>
            <h3>Instagram</h3>
            <div className={cls.main_form}>
              <form>
                <div className={cls.block}>
                  <input
                    type="text"
                    placeholder="Phone number, user name or email"
                    value={name}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                  />
                </div>

                <div className={cls.block}>
                  <input type="password" placeholder="Password" />
                </div>
              </form>
              <button className={classnames(cls.btn, name ? cls.isInput : "")}>
                Log in
              </button>
            </div>
            <div className={cls.bottom_form}>
              <div className={cls.line}></div>
              <div>
                <p>Or</p>
              </div>
              <div className={cls.line}></div>
            </div>
            <div className={cls.btn_link_fb}>
              <button className={cls.btn}>
                <span>
                  <img src="../img/facebook.svg" alt="icon" />
                </span>
                <span>Login with FaceBook</span>
              </button>
            </div>
            <div>
              <a href="#1">Forget password ?</a>
            </div>
          </div>

          <div className={cls.register}>
            <div>
              <p>
                Don't have an account? <a href="#2">Sign up</a>
              </p>
            </div>
          </div>
          <div className={cls.get_link}>
            <p>Get the app</p>
            <div>
              <a href="#3">
                <img src="../img/appstore.png" alt="img" />
              </a>
              <a href="#4">
                <img src="../img/ggplay.png" alt="img" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
