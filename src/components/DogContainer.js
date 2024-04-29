import React, { useState } from "react";

function DogContainer( { dog, onDogUpdate } ){
    const {id, name, image, isGoodDog} = dog
    const [goodDog, setGoodDog] = useState(isGoodDog)

    function handleClick(){
        setGoodDog(!goodDog)
        const updatedDog = {
            ...dog,
            isGoodDog: !goodDog
        }
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedDog)
        })
        .then(r=>r.json())
        .then(updatedDog=>{
            onDogUpdate(updatedDog)
        })
    }

    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                {dog && (
                <>
                    <img src={image} alt={name}/>
                    <h2>{name}</h2>
                    <button onClick={handleClick}>{goodDog ? "Good Dog!" : "Bad Dog!"}</button>
                </>
                    
                )}
                
            </div>
        </div>
    )
}

export default DogContainer