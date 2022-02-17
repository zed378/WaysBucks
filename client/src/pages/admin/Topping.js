// import package
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import component
import ToppingCard from "../../components/card/ToppingCard";

// import assets
import topping from "../../assets/img/topping.svg";
import cssModules from "../../assets/css/Topping.module.css";

// import config
import { API } from "../../config/api";

function Topping() {
  const navigate = useNavigate();
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
    <div className={cssModules.bodyTopping}>
      <button
        className={cssModules.addTop}
        onClick={() => navigate("/topping-add")}
      >
        <img src={topping} alt="product" />
        Add Topping
      </button>
      <br />
      <div className={cssModules.topContainer}>
        {toppings?.map((item, index) => (
          <ToppingCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Topping;
