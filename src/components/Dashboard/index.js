import "./index.scss";
import Login from "../Login";
import Home from "./home";


const Dashboard = (props) => {

  return (<div>{props.user ? <Home /> : <Login />}</div>);
};

export default Dashboard;

