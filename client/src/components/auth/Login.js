// import package
import { useContext, useState } from "react";

// import assets
import cssModules from "../../assets/css/Login.module.css";
import { UserContext } from "../../context/UserContext";

// import config
import { API } from "../../config/api";

function Login(props) {
  const { close, regCard } = props;

  // alert
  const [failed, setFailed] = useState(false);
  const [registered, setRegistered] = useState(false);

  // store data
  const [form, setForm] = useState({
    email: "",
    password: "",
    status: "",
  });

  const [state, dispatch] = useContext(UserContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = document.getElementById("status").value;

    if (status === "Admin") {
      dispatch({
        type: "LOGIN_ADMIN",
      });
    } else {
      dispatch({
        type: "LOGIN_USER",
      });
    }
  };

  return (
    <>
      <div className={cssModules.clickArea} onClick={close}></div>
      <div className={cssModules.loginCard} id="card">
        <h1>Login</h1>

        {failed ? (
          <h3
            style={{
              color: "red",
              background: "#e0cecc",
              textAlign: "center",
              padding: "0.5rem 0",
              fontSize: "1rem",
              fontFamily: "avenirs",
            }}
          >
            Password or Email doesn't match
          </h3>
        ) : (
          <></>
        )}

        {registered ? (
          <h3
            style={{
              color: "red",
              background: "#e0cecc",
              textAlign: "center",
              padding: "0.5rem 0",
              fontSize: "1rem",
              fontFamily: "avenirs",
            }}
          >
            You're not registered
          </h3>
        ) : (
          <></>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <p onClick={regCard}>
          Don't have an account? Click <strong>Here</strong>
        </p>
      </div>
    </>
  );
}

export default Login;
