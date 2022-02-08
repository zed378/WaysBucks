// import packages

// import component

// import assets
import cssModules from "../assets/css/Profile.module.css";
import profile from "../assets/img/profile.jpg";
import logo from "../assets/img/logo.svg";
import qr from "../assets/img/qr.svg";
import product1 from "../assets/img/product1.png";

function Profile() {
  return (
    <>
      <div className={cssModules.profileBody}>
        <div className={cssModules.profileContainer}>
          <div className={cssModules.profileDesc}>
            <h1>My Profile</h1>
            <div className={cssModules.contentWrap}>
              <div className={cssModules.profileImg}>
                <img src={profile} alt="Profile" />
              </div>
              <div className={cssModules.profileData}>
                <div>
                  <h3>Full Name</h3>
                  <p>Egi Ganteng</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>egigans@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={cssModules.historyTransaction}>
            <h1>My Transaction</h1>
            <div className={cssModules.transactionCard}>
              <div className={cssModules.detilTrans}>
                <div className={cssModules.itemTrans}>
                  <div className={cssModules.imgProduct}>
                    <img src={product1} alt="Product Pic" />
                  </div>
                  <div className={cssModules.itemDesc}>
                    <h4>Ice Coffee Palm Sugar</h4>
                    <p className={cssModules.datePurchase}>
                      <strong>Saturday,</strong> 5 March 2020
                    </p>
                    <br />
                    <p className={cssModules.topping}>
                      Topping: Bill Berry Boba, Bubble Tea Gelatin
                    </p>
                    <p className={cssModules.productPrice}>Price: Rp 33.000</p>
                  </div>
                </div>
                <div className={cssModules.itemTrans}>
                  <div className={cssModules.imgProduct}>
                    <img src={product1} alt="Product Pic" />
                  </div>
                  <div className={cssModules.itemDesc}>
                    <h4>Ice Coffee Palm Sugar</h4>
                    <p className={cssModules.datePurchase}>
                      <strong>Saturday,</strong> 5 March 2020
                    </p>
                    <br />
                    <p className={cssModules.topping}>
                      Topping: Bill Berry Boba, Bubble Tea Gelatin
                    </p>
                    <p className={cssModules.productPrice}>Price: Rp 33.000</p>
                  </div>
                </div>
              </div>

              <div className={cssModules.productStamp}>
                <img src={logo} alt="Logo" className={cssModules.bucksLogo} />
                <img src={qr} alt="QR Code" className={cssModules.qrCode} />
                <div>
                  <p className={cssModules.productStatus}>On The way</p>
                  <p className={cssModules.totalPurchase}>
                    Sub Total: Rp 69.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
