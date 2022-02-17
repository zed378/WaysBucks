// import package
import { useState } from "react";

// import assets
import cssModules from "../../assets/css/Register.module.css";

// import config
import { API } from "../../config/api";

function Register(props) {
  const { close, logCard } = props;

  // alert
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [registered, setRegistered] = useState(false);

  // store data
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);
      console.log(response);

      if (response.data.status === "Success") {
        setSuccess(true);
        setTimeout(setSuccess(false), 4000);
      } else if (response.data.status === "Failed") {
        setFailed(true);
        setTimeout(setFailed(false), 4000);
      } else if (response.data.status === "Registered") {
        setRegistered(true);
        setTimeout(setRegistered(false), 4000);
      }

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setFailed(true);
      setTimeout(setFailed(false), 4000);
    }
  };

  return (
    <>
      <div className={cssModules.clickArea} onClick={close}></div>
      <div className={cssModules.regCard}>
        <h1>Register</h1>
        {success ? (
          <h3
            style={{
              color: "green",
              background: "#c5fce5",
              textAlign: "center",
              padding: "0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Register Success
          </h3>
        ) : (
          <></>
        )}

        {failed ? (
          <h3
            style={{
              color: "red",
              background: "#e0cecc",
              textAlign: "center",
              padding: "0.5rem 0",
              fontSize: "1rem",
            }}
          >
            Register Failed
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
            }}
          >
            Email Already Registered
          </h3>
        ) : (
          <></>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Full Name"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
        <p onClick={logCard}>
          Already have an account? Click <strong>Here</strong>
        </p>
      </div>
    </>
  );
}

export default Register;
