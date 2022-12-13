import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Layout from "./components/Layout";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout user={user}/>}>
          <Route index element={<Homepage />} />
          <Route path="/#about" element={<About user={user}/>} />
          <Route path="/#portfolio" element={<Portfolio user={user}/>} />
          <Route path="/#contact" element={<Contact user={user}/>} />
          <Route path="/login" element={<Dashboard user={user}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
