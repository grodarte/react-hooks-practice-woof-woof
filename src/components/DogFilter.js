import React from "react";

function DogFilter( { filterIsOn, onFilterChange } ){

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilterChange}>Filter good dogs: {filterIsOn ? "ON" : "OFF"}</button>
        </div>
    )
}

export default DogFilter