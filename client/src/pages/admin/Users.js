// import package
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// import component
import UserCard from "../../components/card/UserCard";

// import assets
import cssModules from "../../assets/css/Topping.module.css";

// import config
import { API } from "../../config/api";

function Users() {
  //   const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await API.get("/users");

      setUser(response.data.data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user?.map((item, index) => (
        <UserCard item={item} key={index} />
      ))}
    </>
  );
}

export default Users;
