// import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import assets
import logo from "../../assets/img/logo.svg";
import profile from "../../assets/img/profile.jpg";
import cssModules from "../../assets/css/NavAdmin.module.css";

// import component
import AdminMenu from "../card/AdminMenu";

function NavAdmin() {
  // define state
  const [dropModal, setDropModal] = useState(false);

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
          <img src={profile} alt="profile" />
        </div>
      </div>
    </>
  );
}

export default NavAdmin;
