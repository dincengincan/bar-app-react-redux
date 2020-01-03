import React from 'react';
import {Drink,Footer} from "../components";
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
            index: 12,
            pageNumber: 1
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
                
            }))
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
        }
    }

    incrementPageNumber = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({
            pageNumber: this.state.pageNumber+1,
            
        })
    }

    decrementPageNumber = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({
            pageNumber: this.state.pageNumber-1,
            
        })
    }


    render(){
        //Logic for displaying drinks with pagination
        const indexOfLastDrink = this.state.pageNumber * this.state.index;
        const indexOfFirstDrink = indexOfLastDrink - this.state.index;
        const drinksToBeDisplayed = this.state.drinks.slice(indexOfFirstDrink, indexOfLastDrink);
        const drinks = [
            <div>
                {
                    drinksToBeDisplayed.map(drink => {
                        return <Drink key = {drink.idDrink}
                                        {...drink}
                                        drinks = {this.state.drinks}
                        />
                    })
                }

                <Footer 
                    totalDrinks={this.state.drinks.length}
                    pageNumber= {this.state.pageNumber}
                    incrementPageNumber = {this.incrementPageNumber}
                    decrementPageNumber = {this.decrementPageNumber}
                /> 
                
            
            </div>
        ];
        if(this.state.loading) {
            return <h2>Loading...</h2>
        }
        else if(this.state.drinks.length === 0){
            return <h2>Couldn't find.</h2>
        }
        else{
            return drinks;
        }
        
           
        
    }
}

export default DrinkList;