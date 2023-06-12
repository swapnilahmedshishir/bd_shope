import React from "react";
import Product  from "./component/product";
import Data from './fack_data/data.json';

function App(params) {
    
    return (
        <div>
        <h1 className="heading_logo">BD Shope</h1>
        <div className="products">
        {
            Data.map((data) =><Product  key={data.id} FkData={data}></Product> )
        }
        </div>
        
        </div>
    )
}

export default App