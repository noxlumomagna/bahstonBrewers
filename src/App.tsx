import { useState, useEffect } from "react";
import { getAllBreweries } from "./api/apiConfig";
import BreweryList from "./components/BreweryList";
import logo from "../src/assets/beer_icon.png";

export default function App() {
  const [breweries, setBreweries] = useState<Array<Object>>([]);
  const getBreweries = () => {
    getAllBreweries()
      .then((data) => setBreweries(data.data))
      .catch((err) => console.log("Error retrieving breweries", err));
  };

  useEffect(() => {
    getBreweries();
  },[]);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#018749" }}>
      <header>
        <div style={{ textAlign: "center"}} className="logo">
          <img style={{ marginTop: "30px", marginBottom: "-30px"}} src={logo} />
        </div>
        <h1
          style={{
            margin: 50,
            color: "#BA9653",
            fontFamily: "cursive",
            fontSize: 80,
          }}
        >
          Bahston Brewers 
        </h1>
      </header>
      <div style={{ backgroundColor: "#018749" }}>
        <BreweryList breweries={breweries} />
      </div>
    </div>
  );
}
