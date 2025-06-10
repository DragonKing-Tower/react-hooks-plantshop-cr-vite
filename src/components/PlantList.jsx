import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, name }) {
	return (
		<ul className="cards">
			{plants.map((plant) => {
				if (plant.name.toLowerCase().includes(name.toLowerCase())) {
					return <PlantCard key={plant.id} plant={plant} />;
				} else {
					return null;
				}
			})}
		</ul>
	);
}

export default PlantList;
