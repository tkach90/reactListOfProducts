import React, { Fragment } from 'react';

function ProductCar(props) {
    return (
        <Fragment>
            <h2>Car: {props.name}</h2>
            <p>Description: {props.description}</p>
            <div style={{color: props.price > 80000 && "red" || props.price < 80000 && "green"}}>Price: {props.price}</div>
        </Fragment>
    )
}

export default ProductCar;