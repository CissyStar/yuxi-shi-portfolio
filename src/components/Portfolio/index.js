import "./index.scss";
import Cards from "../Cards";
import { useState, useEffect } from "react";
import { dbRef } from "../../firebase";
import { getDocs } from "firebase/firestore";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(dbRef);
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  };

  return (
    <div className="portfolio-page-container" id="portfolio">
      <h1>Mini projects</h1>
      <div className="project-container">
        {portfolio.map((port, index) => {
          return (
            <Cards
              key={`port-${index}`}
              source={port.imageURL}
              title={port.itemName}
              description={port.itemDescription}
              buttonTo={port.itemURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
