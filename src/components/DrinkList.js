import React from 'react';
import {Drink} from "../components";
import {getDrinks} from "../constants"
import {stringContains} from "../helpers";




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
        getDrinks(this.props.activeTag, this.props.activeFilter)
        .then(data => this.setState({
            drinks: data.drinks,
            _drinks: data.drinks,
            loading: false
        }))
        .catch(err => {
            console.log(err);
        });

    }

    //If filter is changed, display new drinks accordingly.
    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
                getDrinks(this.props.activeTag,this.props.activeFilter)
            .then(data => this.setState({
                drinks: data.drinks,
                _drinks: data.drinks,
            }, () => console.log(this.state.drinks)))
            .catch(err => {
                console.log(err);
            });
        }
        if(prevProps.searchValue !== this.props.searchValue){
            this.filterDrinksBySearch();
        }
    }

    filterDrinksBySearch = () => {
        if(this.props.activeFilter){
            this.setState({
                drinks: this.state._drinks.filter(drink => {
                    return stringContains(drink.strDrink, this.props.searchValue)
                })
            })
        }else{
            this.setState({
                drinks: this.state._drinks.filter(drink => {
                    return false;
                })
            })
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
                                        drinks = {this.state.drinks}
                        />
                    })
                }
                
            
            </div>
        )
    }
}

export default DrinkList;