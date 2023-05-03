import React from "react";

function Menu (){
    function handleMenuSearch (event) {
        event.preventDefault()
        console.log(event.target.value);
    }

    return ( <div>
        <h3>Menu items</h3>
        <div>
            <form>
                <input type="text" placeholder="Search Menu Item By Name"  value={menuSearch} onSubmit={handleMenuSearch}/>
            </form>
            <Food Card />
        </div>
        

        </div>

    )
}