

function Filter({ filterGood, onChangeFilter }){

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onChangeFilter}>Filter good dogs: {filterGood ? "ON" : "OFF"}</button>
        </div>
    )
}

export default Filter