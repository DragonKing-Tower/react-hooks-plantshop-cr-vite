import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [name,setName] = useState("")
  const [plants, setPlants] = useState([]);

  useEffect(() => {
		async function getPlants() {
			try {
				const data = await fetch("http://localhost:6001/plants");
				const plantList = await data.json();
				setPlants(plantList);
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		}
		getPlants();
  }, []);

  function addPlants(newPlant){
    setPlants((prevPlants)=>[...prevPlants,newPlant])
  }

  return (
    <main>
      <NewPlantForm addPlants={addPlants}/>
      <Search name={name} setName={setName}/>
      <PlantList plants={plants} name={name}/>
    </main>
  );
}

export default PlantPage;
