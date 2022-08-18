import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import BreweryInfo from "./BreweryInfo";

export default function BreweryList({ breweries }: any) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [breweryId, setbreweryId] = useState<Number>();

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {!showDetails ? (
        <ListGroup style={{ marginBottom: 0 }}>
          {breweries.map((brewery: any, id: number) => (
            <ListGroup.Item
              action
              as="li"
              key={id}
              onClick={() => {
                setShowDetails(true);
                setbreweryId(id);
              }}
            >
              <dl>
                <dt>
                  <h4 style={{ marginTop: 10, color: "#BA9653" }}>
                {brewery.name}
                  </h4>
                  {brewery.street}, {brewery.city},
                  <br />
                  {brewery.state}, {brewery.postal_code}
                  <br />
                  <span style={{}}>
                    <a href={brewery.website_url} target="_blank">
                    {brewery.website_url}
                    </a>
                  </span>
                  <br />
                  <span>Brewery Type: </span>
                  {brewery.brewery_type.toUpperCase()}
                </dt>
              </dl>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <BreweryInfo
          breweries={breweries}
          breweryId={breweryId}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
}
