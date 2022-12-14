import Footer from "../Footer";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Feedback from "../Feedback";

const Layout = (props) => {
  return (
    <div>
      <Navbar user={props.user}/>
      <div className="page">
        <Outlet />
      </div>
      <Feedback />
      <Footer />
    </div>
  );
};

export default Layout;
