// import packages
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import assets
import logo from "../../assets/img/logo.svg";
import cssModules from "../../assets/css/NavAdmin.module.css";
import { UserContext } from "../../context/UserContext";

// import component
import AdminMenu from "../card/AdminMenu";

// import config
import { API } from "../../config/api";

function NavAdmin() {
  // define state
  const [dropModal, setDropModal] = useState(false);
  const [user, setUser] = useState([]);
  const [state, dispatch] = useContext(UserContext);

  const getUser = async () => {
    try {
      const response = await API.get(`/user/${state.user.id}`);
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      {/* set modal using useState */}
      {dropModal ? <AdminMenu close={() => setDropModal(false)} /> : <></>}

      {/* nav content  */}
      <div className={cssModules.navContainer}>
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        <div
          className={cssModules.imgWrapper}
          onClick={() => setDropModal(true)}
        >
          <img src={user.photo} alt="profile" />
        </div>
      </div>
    </>
  );
}

export default NavAdmin;
