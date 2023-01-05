import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";


const Layout = (props) => {
  return (
    <div>
      <Navbar user={props.user}/>
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
