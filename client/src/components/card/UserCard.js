// import package
import { useNavigate } from "react-router-dom";

// import assets
import cssModules from "../../assets/css/Users.module.css";

function UserCard({ item }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={cssModules.userCard}>
        <div className={cssModules.imgContainer}>
          <img src={item.photo} alt="" />
        </div>

        <div className={cssModules.desc}>
          <h2>Name</h2>
          <p>{item.name}</p>
          <h2>Email</h2>
          <p>{item.email}</p>
        </div>
        <button onClick={() => navigate(`/user-detil/${item.id}`)}>
          See Detail
        </button>
      </div>
    </>
  );
}

export default UserCard;
