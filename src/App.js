import React, { Fragment } from 'react';

import ProductCar from './ProductCar';
import ProductData from './ProductData';

function App() {
    const carComponents = ProductData.map((car)=> {
        return (
            <ProductCar key={car.id} name={car.name} description={car.description} price={car.price}/>
        )
    });

    return (
        <Fragment>
            {carComponents}
        </Fragment>
    )
}

export default App;