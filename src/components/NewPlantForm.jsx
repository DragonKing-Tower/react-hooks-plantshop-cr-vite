import React, { useState } from "react";

function NewPlantForm({ addPlants }) {
	const [newPlant, setNewPlant] = useState({
		name: "",
		image: "",
		price: "",
	});

	function handleChange(e) {
		const property = e.target.name;
		if (e.target.type === "number") {
			setNewPlant((prevPlant) => ({
				...prevPlant,
				[property]: parseFloat(e.target.value),
			}));
		} else {
			setNewPlant((prevPlant) => ({
				...prevPlant,
				[property]: e.target.value,
			}));
		}
	}

	function handleSubmit(e) {
    e.preventDefault()
		if (Object.values(newPlant).some(value => value === "")) {
			return;
		}
		addPlants(newPlant);
		postPlant(newPlant);
		setNewPlant({
			/*did this because it is little work for improved outcome for customer, 
      lmk if you want me to take it out to bring it in line with the example*/
			name: "",
			image: "",
			price: "",
		});
	}

	async function postPlant(newPlant) {
		try {
			await fetch("http://localhost:6001/plants", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newPlant),
			});
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	}

	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Plant name"
					value={newPlant.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image URL"
					value={newPlant.image}
					onChange={handleChange}
				/>
				<input
					type="number"
					name="price"
					step="0.01"
					placeholder="Price"
					value={newPlant.price}
					onChange={handleChange}
				/>
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;
