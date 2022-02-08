// import package
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import component

// import assets
import cssModules from "../assets/css/LandingPage.module.css";
import banner from "../assets/img/banner.jpg";
import prod1 from "../assets/img/prod1.jpg";
import prod2 from "../assets/img/prod2.jpg";
import prod3 from "../assets/img/prod3.jpg";
import prod4 from "../assets/img/prod4.jpg";
import { UserContext } from "../context/UserContext";

function LandingPage() {
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const detil = () => {
    if (state.isLogin) {
      navigate("/detail-product");
    } else {
      document.getElementById("login").click();
    }
  };

  return (
    <>
      <div className={cssModules.landingBody}>
        <div className={cssModules.banner}>
          <div className={cssModules.bannerDesc}>
            <h1>WAYSBUCKS</h1>
            <p className={cssModules.p1}>
              Things are changing, but we’re still here for you
            </p>
            <p className={cssModules.p2}>
              We have temporarily closed our in-store cafes, but select grocery
              and drive-thru locations remaining open.{" "}
              <strong>Waysbucks</strong> Drivers is also available
            </p>
            <br />
            <p className={cssModules.p3}>Let’s Order...</p>
          </div>
          <div className={cssModules.bannerImg}>
            <img src={banner} alt="Banner" />
          </div>
        </div>

        <br />
        <br />

        <h1>Let's Order</h1>
        <br />
        <div className={cssModules.productDisplay}>
          <div className={cssModules.productCard} onClick={detil}>
            <div className={cssModules.productImg}>
              <img src={prod1} alt="Product" />
            </div>
            <div className={cssModules.productDesc}>
              <h3>Ice Coffee Palm Sugar</h3>
              <p>Rp 27.000</p>
            </div>
          </div>

          <div className={cssModules.productCard} onClick={detil}>
            <div className={cssModules.productImg}>
              <img src={prod2} alt="Product" />
            </div>
            <div className={cssModules.productDesc}>
              <h3>Ice Coffee Green Tea</h3>
              <p>Rp 27.000</p>
            </div>
          </div>

          <div className={cssModules.productCard} onClick={detil}>
            <div className={cssModules.productImg}>
              <img src={prod3} alt="Product" />
            </div>
            <div className={cssModules.productDesc}>
              <h3>Hanami Latte</h3>
              <p>Rp 27.000</p>
            </div>
          </div>

          <div className={cssModules.productCard} onClick={detil}>
            <div className={cssModules.productImg}>
              <img src={prod4} alt="Product" />
            </div>
            <div className={cssModules.productDesc}>
              <h3>Clepon Coffee</h3>
              <p>Rp 27.000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
