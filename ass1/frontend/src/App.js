import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/Login";
import Regv from "./components/common/Regv";
import Regb from "./components/common/Regb";
import Buyer from "./components/common/Buyer";
import Vendor from "./components/common/Vendor";
import Addfood from "./components/common/Addfooditem";
import Myprofile from "./components/common/Myprofile";
import Buyerp from "./components/common/Buyerp";
import Myorders from "./components/common/Myorders";
import Vendororders from "./components/common/Vendororder";
import Fav from "./components/common/fav";
import Walletadd from "./components/common/walletadd";
import Ratenow from "./components/common/Ratenow";
import Stat from "./components/common/Stat";

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (                      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="vendor" element={<Regv />} />
          <Route path="buyer" element={<Regb />} />
          <Route path="login/buyer" element={<Buyer />}/>
          <Route path="login/vendor" element={<Vendor />}/>
          <Route path="addfooditem" element={<Addfood />}/>
          <Route path="mypro" element={<Myprofile />}/>
          <Route path="buyerprofile" element={<Buyerp />}/>
          <Route path="myorders" element={<Myorders />}/>
          <Route path="fav" element={<Fav />}/>
          <Route path="vendororder" element={<Vendororders />}/>
          <Route path="walletadd" element={<Walletadd />}/>
          <Route path="ratenow" element={<Ratenow />}/>
          <Route path="stat" element={<Stat />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
