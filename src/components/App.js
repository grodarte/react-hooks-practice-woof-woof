import React, { useEffect, useState } from "react";
import DogFilter from "./DogFilter";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";

function App() {
  const [dogs, setDogs] = useState([])
  const [filterIsOn, setFilterIsOn] = useState(false)
  const [dogInfo, setDogInfo] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3001/pups")
    .then(r=>r.json())
    .then(dogData=>setDogs(dogData))
  }, [])

  function handleDogClick(selectDog){
    setDogInfo(selectDog)
  }

  function handleFilterChange(){
    setFilterIsOn(!filterIsOn)
  }

  function handleDogUpdate(updatedDog){
    const updatedDogs = dogs.map(dog=>{
      if(dog.id === updatedDog.id){
        return updatedDog
      } else {
        return dog
      }
    })
    setDogs(updatedDogs)
  }

  return (
    <div className="App">
      <DogFilter filterIsOn={filterIsOn} onFilterChange={handleFilterChange}/>
      <DogBar dogs={filterIsOn ? dogs.filter(dog=> dog.isGoodDog === true) : dogs} onDogClick={handleDogClick}/>
      <DogContainer dog={dogInfo} onDogUpdate={handleDogUpdate}/>
    </div>
  );
}

export default App;
