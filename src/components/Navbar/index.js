import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { signOutUser } from "../../firebase";

const Navbar = (props) => {

  const handleSignOut = () => {
    if (props.user) {
      signOutUser();
    }
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        Yuxi Shi
      </Link>
      <nav>
        <HashLink className="home" exact="true" activeclassname="active" to="/">
          Home
        </HashLink>
        <HashLink
          className="about"
          exact="true"
          activeclassname="active"
          to="/#about"
        >
          About
        </HashLink>
        <HashLink
          className="portfolio"
          exact="true"
          activeclassname="active"
          to="/#portfolio"
        >
          Portfolio
        </HashLink>
        <HashLink
          className="contact"
          exact="true"
          activeclassname="active"
          to="/#contact"
        >
          Contact
        </HashLink>
        <NavLink exact="true" activeclassname="active" to="/login">
          <button className="login" onClick={handleSignOut}>
            {!props.user ? "Login" : "Log out"}
          </button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
