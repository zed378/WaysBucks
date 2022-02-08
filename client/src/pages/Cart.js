// import packages
import { useState, useContext } from "react";

// import component

// import assets
import cssModules from "../assets/css/Cart.module.css";
import product1 from "../assets/img/product1.png";
import trash from "../assets/img/trash.svg";
import attachment from "../assets/img/attachment.svg";
import { UserContext } from "../context/UserContext";

function Cart() {
  const [state, dispatch] = useContext(UserContext);

  // store data
  const [form, setForm] = useState({
    attach: "",
    name: "",
    email: "",
    phone: "",
    postal: "",
    address: "",
  });
  // init state for preview thumbnail
  const [preview, setPreview] = useState(null);

  const inputFile = () => {
    document.getElementById("attach").click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "popShow",
    });

    setTimeout(
      () =>
        dispatch({
          type: "popClose",
        }),
      5000
    );
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  return (
    <>
      <div className={cssModules.cartBody}>
        <h1>My Cart</h1>
        <br />
        <h3>Review Your Order</h3>
        <br />
        <div className={cssModules.orderCart}>
          <div className={cssModules.orderReview}>
            <div className={cssModules.orderItems}>
              {/* item description  */}
              <div className={cssModules.itemDesc}>
                <div className={cssModules.productDesc}>
                  <div className={cssModules.productImg}>
                    <img src={product1} alt="Product" />
                  </div>
                  <div className={cssModules.descriptions}>
                    <h4>Ice Coffee Palm Sugar</h4>
                    <p>
                      <strong>Topping :</strong> Bill Berry Boba, Bubble Tea
                      Gelatin
                    </p>
                  </div>
                </div>
                <div className={cssModules.productPrices}>
                  <p>Rp 33.000</p>
                  <img src={trash} alt="del btn" />
                </div>
              </div>
              {/* end of item description */}

              <div className={cssModules.itemDesc}>
                <div className={cssModules.productDesc}>
                  <div className={cssModules.productImg}>
                    <img src={product1} alt="Product" />
                  </div>
                  <div className={cssModules.descriptions}>
                    <h4>Ice Coffee Palm Sugar</h4>
                    <p>
                      <strong>Topping :</strong> Bill Berry Boba, Mango
                    </p>
                  </div>
                </div>
                <div className={cssModules.productPrices}>
                  <p>Rp 36.000</p>
                  <img src={trash} alt="del btn" />
                </div>
              </div>
            </div>

            <br />
            <div className={cssModules.payment}>
              <div className={cssModules.payDesc}>
                <div className={cssModules.subTotal}>
                  <div className={cssModules.total}>
                    <h4>Subtotal</h4>
                    <h4>Rp 69.000</h4>
                  </div>
                  <div className={cssModules.total}>
                    <h4>Qty</h4>
                    <h4>2</h4>
                  </div>
                </div>
                <div className={cssModules.payTotal}>
                  <h4>Total</h4>
                  <h4>Rp 69.000</h4>
                </div>
              </div>

              {/* payment pic proof preview */}
              <div className={cssModules.payProof}>
                <div className={cssModules.imgPayment} id="imgPayment">
                  {preview && (
                    <img
                      src={preview}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "50%",
                      }}
                      alt="preview"
                    />
                  )}
                </div>
                <button onClick={inputFile}>
                  <img src={attachment} alt="Attachment" /> Attach Payment
                </button>
              </div>
            </div>
          </div>

          <div className={cssModules.personInfo}>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                id="attach"
                name="attach"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
              />
              <input
                type="number"
                name="postal"
                placeholder="Postal Code"
                onChange={handleChange}
              />
              <textarea
                name="address"
                placeholder="Address"
                onChange={handleChange}
              ></textarea>
              <button type="submit">Pay</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
