import React from 'react'

function NewCatMenu({filterItems, catItems}) {
    return (
        <>
           <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">

                {
                    catItems.map((curClem, index) => {
                        return <button className="btn btn-warning" key={index} onClick={() => filterItems(curClem)}>{curClem}</button>
                    })
                }


                    {/* <button className="btn btn-warning" onClick={() => filterItems('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItems('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItems('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>
        </>
    )
}

export default NewCatMenu
