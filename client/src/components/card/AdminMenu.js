// import package
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// import assets
import income from "../../assets/img/income.svg";
import product from "../../assets/img/product.svg";
import topping from "../../assets/img/topping.svg";
import logout from "../../assets/img/logout.svg";
import triangle from "../../assets/img/triangle.svg";
import cssModules from "../../assets/css/AdminMenu.module.css";
import { UserContext } from "../../context/UserContext";

function AdminMenu(props) {
  const { close } = props;

  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const LogOut = () => {
    navigate("/");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <div className={cssModules.dropWrapper} onClick={close}></div>
      <div className={cssModules.dropdown}>
        <img src={triangle} alt="triangle" className={cssModules.triangle} />
        <div
          className={cssModules.menuOption}
          onClick={() => navigate("/income")}
        >
          <div>
            <img src={income} alt="Income" />
          </div>
          <p>Income</p>
        </div>
        <hr />
        <div
          className={cssModules.menuOption}
          onClick={() => navigate("/product-add")}
        >
          <div>
            <img src={product} alt="Product" />
          </div>
          <p>Add Product</p>
        </div>
        <div
          className={cssModules.menuOption}
          onClick={() => navigate("/topping-add")}
        >
          <div>
            <img src={topping} alt="Topping" />
          </div>
          <p>Add Topping</p>
        </div>
        <hr />
        <div className={cssModules.menuOption} onClick={LogOut}>
          <div>
            <img src={logout} alt="Log Out" />
          </div>
          <p>Log Out</p>
        </div>
      </div>
    </>
  );
}

export default AdminMenu;
