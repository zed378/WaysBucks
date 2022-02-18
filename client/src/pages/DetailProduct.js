// import packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";

// import component

// import assets
import cssModules from "../assets/css/DetailProduct.module.css";
import product1 from "../assets/img/product1.png";
import check from "../assets/img/check.svg";

// import config
import { API } from "../config/api";

function DetailProduct() {
  let navigate = useNavigate();

  const [toppings, setToppings] = useState([]);

  const getToppings = async () => {
    try {
      const response = await API.get("/toppings");

      setToppings(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToppings();
  }, []);

  return (
    <>
      <div className={cssModules.bodyDetail}>
        <div className={cssModules.imgProduct}>
          <img src={product1} alt="Product" />
        </div>

        <div className={cssModules.topping}>
          <h1>Ice Coffee Palm Sugar</h1>
          <p>Rp 27.000</p>
          <br />
          <h2>Topping</h2>
          <div className={cssModules.menuWrapper}>
            {toppings?.map((item) => (
              <div className={cssModules.toppingMenu}>
                {item.isCheck === 1 ? (
                  <img
                    src={check}
                    alt="isChecked"
                    className={cssModules.isChecked}
                  />
                ) : (
                  <></>
                )}
                <img src={item.thumbnail} alt="Bubble Tea Gelatin" />
                <div>
                  <p>{item.title}</p>
                  <p>
                    {toRupiah(item.price, {
                      formal: false,
                      floatingPoint: 0,
                    })}
                  </p>
                </div>
              </div>
            ))}
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
