/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [dataSubmit, setDataSubmit] = useState({ name: "", pass: "" });
  const onSingUp = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  };
  const onSingIn = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
    //
  };
  const submitLogin = (e) => {
    e.preventDefault();
    console.log("vl", dataSubmit);
    axios
      .post("https://sever-bs.herokuapp.com/api/v1/admin/login", dataSubmit, {
        headers: { "x-api-key": "mewmew" },
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.msg === "ok") {
          Swal.fire({
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            console.log("ok");
            window.location.replace("http://www.w3schools.com");
          }, 1500);
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Login Error",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={(e) => submitLogin(e)}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={dataSubmit.name} onChange={(e) => setDataSubmit({ ...dataSubmit, name: e.target.value })} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={dataSubmit.pass} onChange={(e) => setDataSubmit({ ...dataSubmit, pass: e.target.value })} />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => onSingUp()}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => onSingIn()}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
