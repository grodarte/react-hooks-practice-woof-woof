
function DogBar({ dogs, onDogClick }){

    const dogElements = dogs.map(dog=><span key={dog.id} onClick={()=>onDogClick(dog)}>{dog.name}</span>)

    return (
        <div id="dog-bar">
            {dogElements}
        </div>
    )
}

export default DogBar