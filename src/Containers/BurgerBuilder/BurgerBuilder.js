import React,{Component} from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosInstance';
import  Spinner from '../../Components/UI/Spinner/Spinner';


const INGREDIENTS_PRICE={
    salad:0.4,
    cheese:0.6,
    meat:1.0,
    bacon:0.8
}



class BurgerBuilder extends Component
{
    state=
    {
        ingredients:
        {
        cheese:0,
        bacon:0,
        salad:0,
        meat:0
        },
        totalPrice:4.0,
        purchasable:false,
        purchasing:false,
        isrequesting:false
    }
    orderHandler=(stat)=>
    {
        const ingredients={...stat};
        const sum=Object.keys(ingredients).map((igkey)=>ingredients[igkey]).reduce((st,nx)=>st+nx,0);
        this.setState({purchasable:sum>0});
    }
    
    purchaseHandler=()=>(this.setState({purchasing:true}));

    purchasecancelHandler=()=>(this.setState({purchasing:false}));

    purchaseconfirmHandler=()=>
    {
        this.setState({isrequesting:true});
        const data={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice
        }
        axios.post('/orders.json',data)
        .then(response=>(this.setState({isrequesting:false})))
        .then(this.setState({purchasing:false}));
    }

    addIngredients=(type)=>
    {
        const oldcount=this.state.ingredients[type];
        const updatedcount=oldcount+1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedcount;
        const newPrice=this.state.totalPrice+INGREDIENTS_PRICE[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.orderHandler(updatedIngredients);
    }

    removeIngredient=(type)=>
    {
        const oldcount=this.state.ingredients[type];
        if(oldcount<=0)
        return;
        const updatedcount=oldcount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedcount;
        const newPrice=this.state.totalPrice-INGREDIENTS_PRICE[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.orderHandler(updatedIngredients);
    }

    render()
    {
        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        let ordersummary=<OrderSummary ingredients={this.state.ingredients}
        orderCancelled={this.purchasecancelHandler}
        orderConfirmed={this.purchaseconfirmHandler}
        price={this.state.totalPrice.toFixed(2)}>
        </OrderSummary>;
        if(this.state.isrequesting)
        {
            ordersummary=<Spinner/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchasecancelHandler} >
                    {ordersummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls added={this.addIngredients}
                              removed={this.removeIngredient} 
                              price={this.state.totalPrice} 
                              disabled={disabledInfo} 
                              ordered={this.purchaseHandler}
                              ordisabled={this.state.purchasable}/>
            </Aux>
        );
    }
}
export default BurgerBuilder;