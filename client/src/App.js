// import package
import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import assets
import "./assets/css/App.css";
import { UserContext } from "./context/UserContext";

// import pages
import {
  Cart,
  DetailProduct,
  LandingPage,
  Profile,
  Income,
  ProductAdd,
  ToppingAdd,
  PopUp,
} from "./pages";

// import component
import { Nav, NavLogged, NavAdmin } from "./components/nav";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  // init context
  const [state, dispatch] = useContext(UserContext);

  return (
    <>
      <Router>
        {state.isPop ? (
          <PopUp close={() => dispatch({ type: "popClose" })} />
        ) : (
          <></>
        )}

        {!state.isLogin ? (
          <Nav />
        ) : state.isLogin && state.isAdmin ? (
          <NavAdmin />
        ) : (
          <NavLogged />
        )}

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/detail-product" element={<DetailProduct />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/income" element={<Income />} />
            <Route exact path="/product-add" element={<ProductAdd />} />
            <Route exact path="/topping-add" element={<ToppingAdd />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
