import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function App() {
  const [doggos, setDoggos] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)
  const [filterGood, setFilterGood] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:3001/pups`)
    .then(r=>r.json())
    .then(dogData=>setDoggos(dogData))
  }, [])

  function handleDogClick(clickedDog){
    setSelectedDogId(clickedDog.id)
  }

  function handleUpdateDog(updatedDog){
    const updatedDogList = doggos.map(dog=>{
      if(dog.id === updatedDog.id){
        return updatedDog
      } else {
        return dog
      }
    })

    setDoggos(updatedDogList)
  }

  function handleChangeFilter(){
    setFilterGood(filterGood=>!filterGood)
  }

  const selectedDog = doggos.find(dog=>selectedDogId === dog.id)

  const displayDogs = !filterGood ? doggos : doggos.filter(dog=> dog.isGoodDog)

  return (
    <div className="App">
        <Filter filterGood={filterGood} onChangeFilter={handleChangeFilter}/>
        <DogBar dogs={displayDogs} onDogClick={handleDogClick}/>
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {selectedDogId ? <DogSummary selectedDog={selectedDog} onUpdateDog={handleUpdateDog}/> : null}
        </div>
    </div>
  );
}

export default App;
