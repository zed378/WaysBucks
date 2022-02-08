// import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import component

// import assets
import cssModules from "../assets/css/DetailProduct.module.css";
import product1 from "../assets/img/product1.png";
import top1 from "../assets/img/top1.png";
import top2 from "../assets/img/top2.png";
import top3 from "../assets/img/top3.png";
import top4 from "../assets/img/top4.png";
import top5 from "../assets/img/top5.png";
import top6 from "../assets/img/top6.png";
import top7 from "../assets/img/top7.png";
import top8 from "../assets/img/top8.png";
import check from "../assets/img/check.svg";

function DetailProduct() {
  let navigate = useNavigate();
  // set state
  const [checked, setChecked] = useState({
    top1: false,
    top2: false,
    top3: false,
    top4: false,
    top5: false,
    top6: false,
    top7: false,
    top8: false,
  });

  // set checked function
  const setTop1 = () => {
    if (checked.top1) {
      setChecked({ top1: false });
    } else {
      setChecked({ top1: true });
    }
  };

  const setTop2 = () => {
    if (checked.top2) {
      setChecked({ top2: false });
    } else {
      setChecked({ top2: true });
    }
  };

  const setTop3 = () => {
    if (checked.top3) {
      setChecked({ top3: false });
    } else {
      setChecked({ top3: true });
    }
  };

  const setTop4 = () => {
    if (checked.top4) {
      setChecked({ top4: false });
    } else {
      setChecked({ top4: true });
    }
  };

  const setTop5 = () => {
    if (checked.top5) {
      setChecked({ top5: false });
    } else {
      setChecked({ top5: true });
    }
  };

  const setTop6 = () => {
    if (checked.top6) {
      setChecked({ top6: false });
    } else {
      setChecked({ top6: true });
    }
  };

  const setTop7 = () => {
    if (checked.top7) {
      setChecked({ top7: false });
    } else {
      setChecked({ top7: true });
    }
  };

  const setTop8 = () => {
    if (checked.top8) {
      setChecked({ top8: false });
    } else {
      setChecked({ top8: true });
    }
  };

  return (
    <>
      <div className={cssModules.bodyDetail}>
        <div className={cssModules.imgProduct}>
          <img src={product1} alt="" />
        </div>

        <div className={cssModules.topping}>
          <h1>Ice Coffee Palm Sugar</h1>
          <p>Rp 27.000</p>
          <br />
          <h2>Topping</h2>
          <div className={cssModules.menuWrapper}>
            <div className={cssModules.toppingMenu} onClick={() => setTop1()}>
              {checked.top1 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top1} alt="Bubble Tea Gelatin" />
              <div>
                <p>Bubble Tea Gelatin</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop2()}>
              {checked.top2 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top2} alt="Mango" />
              <div>
                <p>Mango</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop3()}>
              {checked.top3 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top3} alt="Green Coconut" />
              <div>
                <p>Green Coconut</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop4()}>
              {checked.top4 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top4} alt="Boba Mango" />
              <div>
                <p>Boba Mango</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop5()}>
              {checked.top5 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top5} alt="Bill Berry Boba" />
              <div>
                <p>Bill Berry Boba</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop6()}>
              {checked.top6 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top6} alt="Kiwi Popping Pearl" />
              <div>
                <p>Kiwi Popping Pearl</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop7()}>
              {checked.top7 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top7} alt="Matcha Cantaloupe" />
              <div>
                <p>Matcha Cantaloupe</p>
                <p>Rp 3.000</p>
              </div>
            </div>
            <div className={cssModules.toppingMenu} onClick={() => setTop8()}>
              {checked.top8 ? (
                <img
                  src={check}
                  alt="isChecked"
                  className={cssModules.isChecked}
                />
              ) : (
                <></>
              )}
              <img src={top8} alt="Strawberry Popping" />
              <div>
                <p>Strawberry Popping</p>
                <p>Rp 3.000</p>
              </div>
            </div>
          </div>
          <br />
          <div className={cssModules.totalPrice}>
            <h2>Total</h2>
            <h3>Rp 27.000</h3>
          </div>
          <button onClick={() => navigate("/cart")}>Add Cart</button>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
