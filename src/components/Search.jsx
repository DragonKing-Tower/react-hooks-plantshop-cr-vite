import React from "react";

function Search({ name, setName }) {
	return (
		<div className="searchbar">
			<label htmlFor="search">Search Plants:</label>
			<input
				type="text"
				id="search"
				placeholder="Type a name to search..."
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
		</div>
	);
}

export default Search;
