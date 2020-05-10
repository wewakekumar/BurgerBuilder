import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../Components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle';


const toolbar=(props)=>
(
    <header className={classes.Toolbar}>
        <DrawerToggle toggle={props.toggle}/>
        <Logo height="80%"></Logo>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
        
        
    </header>
);

export default toolbar;