import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
    {label:"Bacon",type:"bacon"},
    {label:"Salad",type:"salad"}
];

const buildControls=(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price :<strong>{props.price.toFixed(2)}</strong></p>
        {
        controls.map(ctrl=>
        (<BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            type={ctrl.type} 
            moreadded={()=>props.added(ctrl.type)}
            lessadded={()=>props.removed(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />)
        )
        }
        <button onClick={props.ordered} disabled={!props.ordisabled} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);
export default buildControls;