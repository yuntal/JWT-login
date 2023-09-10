import { useState, useEffect } from "react";
import { API } from "../../constants/api2";
import FlowerItem from "./FlowerItem";
import { Row, Col } from "react-bootstrap";

function FlowerList() {
	const [flowers, setFlowers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

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
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<Row>
			<Col> 
        <div className="flowers">
         {flowers.map(function (products) {
          const { id, name, prices, images } = products;
          return <FlowerItem key={id} id={id} name={name} prices={prices.price} images={images}/>;
         })}
        </div>
		</Col>
		</Row>
       );
}

export default FlowerList;