

function DogSummary({ selectedDog, onUpdateDog }){
    const {id, name, image, isGoodDog} = selectedDog

    function handleClick(){
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog
            })
        })
        .then(r=>r.json())
        .then(updatedDog=>onUpdateDog(updatedDog))
    }

    return (
            <div id="dog-info">
                <img src={image} alt={name}/>
                <h2>{name}</h2>
                <button onClick={handleClick}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
            </div>
    )
}

export default DogSummary