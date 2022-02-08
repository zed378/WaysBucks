// import package
import { useContext, useState } from "react";

// import assets
import cssModules from "../../assets/css/Login.module.css";
import { UserContext } from "../../context/UserContext";

function Login(props) {
  const { close, regCard } = props;

  // store data
  const [form, setForm] = useState({
    email: "",
    password: "",
    status: "",
  });

  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={cssModules.clickArea} onClick={close}></div>
      <div className={cssModules.loginCard} id="card">
        <h1>Login</h1>
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
          <select name="status" id="status" onChange={handleChange}>
            <option value="">--- Choose Status ---</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
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
