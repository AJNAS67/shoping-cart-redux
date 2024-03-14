import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import Home from "./pages/home";
import ShopingCart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/cart" element={<ShopingCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
