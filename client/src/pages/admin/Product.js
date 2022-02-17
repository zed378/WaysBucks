// import package
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import component
import ProductCard from "../../components/card/ProductCard";

// import assets
import product from "../../assets/img/product.svg";
import cssModules from "../../assets/css/Product.module.css";

// import config
import { API } from "../../config/api";

function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await API.get("/products");

      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={cssModules.bodyProduct}>
      <button
        className={cssModules.addProd}
        onClick={() => navigate("/product-add")}
      >
        <img src={product} alt="product" />
        Add Product
      </button>
      <br />
      <div className={cssModules.prodContainer}>
        {products?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Product;
