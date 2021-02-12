import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <div className={classes.buttonControls}>
            <button onClick={props.lessadded} className={classes.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.moreadded} className={classes.More}>More</button>
        </div>
    </div>
);

export default BuildControl;