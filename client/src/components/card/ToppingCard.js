// import package
import toRupiah from "@develoka/angka-rupiah-js";

// import assets
import cssModules from "../../assets/css/Topping.module.css";

function ToppingCard({ item }) {
  return (
    <div className={cssModules.topCard}>
      <div className={cssModules.topImg}>
        <img src={item.thumbnail} alt="Topping" />
      </div>
      <div className={cssModules.topDesc}>
        <h3>{item.title}</h3>
        <p>{toRupiah(item.price, { formal: false, floatingPoint: 0 })}</p>
      </div>
      <div className={cssModules.actionBtn}>
        <button className={cssModules.editBtn}>Edit</button>
        <button className={cssModules.delBtn}>Delete</button>
      </div>
    </div>
  );
}

export default ToppingCard;
