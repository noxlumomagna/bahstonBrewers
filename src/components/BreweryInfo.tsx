import Map from "./Map";
import { getCoordinates } from "../api/apiConfig";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BreweryInfo = ({ breweries, breweryId, setShowDetails }: any) => {
  const [lat, setLat] = useState<String>();
  const [lng, setLng] = useState<String>();

  const getMap = () => {
    if (!breweries[breweryId].latitude) {
      getCoordinates(
        breweries[breweryId].street,
        breweries[breweryId].city,
        breweries[breweryId].state
      )
        .then((data) => {
          setLat(data.data.results[0].geometry.location.lat);
          setLng(data.data.results[0].geometry.location.lng);
        })
        .catch((err) => console.error("Error retrieving map data", err));
    }
  };
  useEffect(() => {
    getMap();
  }, []);

  return (
    <Card style={{ width: "100%", paddingTop: 20, paddingBottom: 20 }}>
      <div style={{ marginBottom: 20, width: 500 }}></div>
      <Card.Title style={{ color: "#BA9653" }}>
        {breweries[breweryId].name}
      </Card.Title>
      <Card.Body>
        <Map
          style={{}}
          latitude={lat || breweries[breweryId].latitude}
          longitude={lng || breweries[breweryId].longitude}
        ></Map>
        <dt>
          <dt>Street Address:</dt>
          <span>
            {breweries[breweryId].street}, {breweries[breweryId].city},
          </span>
          <br />
          <span>
            {breweries[breweryId].state}, {breweries[breweryId].postal_code}
          </span>
          <br />
          <span>Phone Number: </span>
          {breweries[breweryId].phone}
          <br />
          <span>Website: </span>
          <span>
            <a href={breweries[breweryId].website_url} target="_blank">
              {breweries[breweryId].website_url}
            </a>
            <br />
          </span>
          <span>Brewery Type: </span>
          {breweries[breweryId].brewery_type.toUpperCase()}
        </dt>
      </Card.Body>
      <Button
        className="d-grid gap-1"
        variant="outline-danger"
        size="lg"
        onClick={() => setShowDetails(false)}
      >
        Return
      </Button>
    </Card>
  );
};

export default BreweryInfo;
