import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/NavigationItems/SideDrawer/SideDrawer';

class Layout extends Component
{
    state=
    {
        showSideDrawer:false
    }
    closeSideDrawer=()=>{this.setState({showSideDrawer:false})};
    toggleDrawerHandler=()=>
    {this.setState((prevState)=>
        {return {showSideDrawer:!prevState.showSideDrawer};
        });
    }
    render()
    {
        return (
            <Aux>
            <Toolbar toggle={this.toggleDrawerHandler}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer}  closed={this.closeSideDrawer}></SideDrawer>
            <main className={classes.mymain}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
};


export default Layout;
