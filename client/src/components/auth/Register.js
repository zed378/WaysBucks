// import package
import { useState } from "react";

// import assets
import cssModules from "../../assets/css/Register.module.css";

function Register(props) {
  const { close, logCard } = props;

  // store data
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={cssModules.clickArea} onClick={close}></div>
      <div className={cssModules.regCard}>
        <h1>Register</h1>
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
          <input
            type="text"
            name="name"
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
