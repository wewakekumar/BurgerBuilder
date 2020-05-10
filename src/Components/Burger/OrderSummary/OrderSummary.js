import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

const ordersummary=(props)=>
{
    const mylist=Object.keys(props.ingredients).map(igkey=>
        (<li key={igkey}>
            <span style={{textTransform:"capitalize"}}>{igkey} </span>: {props.ingredients[igkey]}
        </li>)
        )
    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>A delicious Pizza with following ingredients:</p>
            <ul>
                {mylist}
            </ul>
            <p><strong>Total Price :{props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.orderCancelled} >CANCEL</Button>
            <Button btnType='Success' clicked={props.orderConfirmed}>CONTINUE</Button>
        </Aux>
    );
    
};

export default ordersummary;