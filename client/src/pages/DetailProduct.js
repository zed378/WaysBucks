// import packages
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";

// import component

// import assets
import cssModules from "../assets/css/DetailProduct.module.css";
import check from "../assets/img/check.svg";

// import config
import { API } from "../config/api";

function DetailProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [total, setTotal] = useState(null);

  const getProduct = async () => {
    try {
      const res = await API.get("/product/" + id);

      setProduct({
        title: res.data.data.title,
        thumbnail: res.data.data.thumbnail,
        price: toRupiah(res.data.data.price, {
          formal: false,
          floatingPoint: 0,
        }),
      });
      setTotal(
        toRupiah(res.data.data.price, { formal: false, floatingPoint: 0 })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getToppings = async () => {
    try {
      const response = await API.get("/toppings");

      setToppings(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const checked = async (idTop, isClick) => {
    try {
      if (isClick === 0) {
        await API.patch(`/setClick/${idTop}/1`);

        getToppings();
      } else if (isClick === 1) {
        await API.patch(`/setClick/${idTop}/0`);

        getToppings();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    getToppings();
  }, []);

  useEffect(getToppings);

  return (
    <>
      <div className={cssModules.bodyDetail}>
        <div className={cssModules.imgProduct}>
          <img src={product.thumbnail} alt="Product" />
        </div>

        <div className={cssModules.topping}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <br />
          <h2>Topping</h2>
          <div className={cssModules.menuWrapper}>
            {toppings?.map((item) => (
              <div
                id="topp"
                className={cssModules.toppingMenu}
                onClick={() => checked(item.id, item.isClick)}
              >
                {item.isClick === 1 ? (
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
                    {toRupiah(item.price, { formal: false, floatingPoint: 0 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className={cssModules.totalPrice}>
            <h2>Total</h2>
            <h3>{total}</h3>
          </div>
          <button onClick={() => navigate("/cart")}>Add Cart</button>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
