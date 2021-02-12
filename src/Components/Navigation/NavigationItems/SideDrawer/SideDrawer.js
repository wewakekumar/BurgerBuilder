import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import Aux from '../../../../hoc/Auxilliary';
import BackDrop from '../../../UI/Backdrop/Backdrop';

const sidedrawer=(props)=>
{
    let myclass=[classes.SideDrawer,classes.Close];
    if(props.open)
        {myclass=[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={myclass.join(' ')}>
                <Logo height="10%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
            
           )
}

export default sidedrawer;