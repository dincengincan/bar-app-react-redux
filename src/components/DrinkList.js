import React from 'react';
import {Drink} from "../components";
import {getDrinks} from "../constants"




class DrinkList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            _drinks: [],
            drinks: [],
            loading: true,
            categories: [],
            index: 12
        }
    }

    //Get the data according to the filter
    componentDidMount(){
        getDrinks(this.props.activeFilter)
        .then(data => this.setState({
            drinks: data.drinks,
            _drinks: data.drinks,
            loading: false
        }, () => console.log(this.state.drinks)))
        .catch(err => {
            console.log(err);
        });

    }

    //If filter is changed, display new drinks accordingly.
    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            getDrinks(this.props.activeFilter)
        .then(data => this.setState({
            drinks: data.drinks,
            _drinks: data.drinks,
        }))
        .catch(err => {
            console.log(err);
        });
        }

    }


    render(){
        const drinksToBeDisplayed = this.state.drinks.slice(0,this.state.index)
        return(
            <div>
                {
                    drinksToBeDisplayed.map(drink => {
                        return <Drink key = {drink.idDrink}
                                        {...drink}
                        
                        />
                    })
                }
                
                <Drink drinks = {this.state.drinks}
                />
            </div>
        )
    }
}

export default DrinkList;