// import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import assets
import logo from "../../assets/img/logo.svg";
import profile from "../../assets/img/profile.jpg";
import basket from "../../assets/img/basket.svg";
import cssModules from "../../assets/css/NavLogged.module.css";

// import component
import DropMenu from "../card/DropMenu";

function NavLogged() {
  // define state
  const [dropModal, setDropModal] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      {/* set modal using useState */}
      {dropModal ? <DropMenu close={() => setDropModal(false)} /> : <></>}

      {/* nav content  */}
      <div className={cssModules.navContainer}>
        <img src={logo} alt="Logo" onClick={() => navigate("/")} />
        <div className={cssModules.profileWrapper}>
          <img
            src={basket}
            alt="basket"
            className={cssModules.basketImg}
            onClick={() => navigate("/cart")}
          />
          <div
            className={cssModules.imgWrapper}
            onClick={() => setDropModal(true)}
          >
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavLogged;
