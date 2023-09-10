import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../constants/api2";
import { Card} from "react-bootstrap";
import { Link } from "react-router-dom";

function FlowerDetail() {
 const [flowers, setFlowers] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 let history = useHistory();

 const { id } = useParams();

 if (!id) {
  history.push("/");
 }

 const url = API + "/" + id;

 useEffect(
  function () {
   async function fetchData() {
    try {
     const response = await fetch(url);

     if (response.ok) {
      const json = await response.json();
      console.log(json);
      setFlowers(json);
     } else {
      setError("An error occured");
     }
    } catch (error) {
     setError(error.toString());
    } finally {
     setLoading(false);
    }
   }
   fetchData();
  },
  [url]
 );

 if (loading) {
  return <div className="loading">Loading...</div>;
 }

 if (error) {
  return <div className="error">An error occured: {error}</div>;
 }

 return (
  
  <div className="flower-detail">
    <Link to="/" className="back">Back to flowers</Link>
    <Card id="card">
<Card.Img variant="top" src= {flowers.images[0].src} id="card-top"/>
<Card.Body>
  <Card.Title>{flowers.name}</Card.Title>
  <Card.Title>$ {flowers.prices.price}</Card.Title>
</Card.Body>
</Card>
  </div>


 );
}

export default FlowerDetail;