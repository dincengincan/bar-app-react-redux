import React from 'react';
import {Drink,Footer} from "../components";
import {connect} from "react-redux";
import {fetchDrinks, filterBySearch} from "../actionCreators/actionCreators";




class DrinkList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            index: 12,
            pageNumber: 1
        }
    }

    //Get the data according to the filter
    componentDidMount(){
        document.title = "Bar App"
        this.props.fetchDrinks();
    }

    //If filter is changed, display new drinks accordingly.
    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            this.props.fetchDrinks();
        }
        if(prevProps.searchValue !== this.props.searchValue){
            this.props.filterBySearch();
        }
    }

    render(){
        
        //Logic for displaying drinks with pagination
        const indexOfLastDrink = this.props.pageNumber * this.props.index;
        const indexOfFirstDrink = indexOfLastDrink - this.props.index;
        const drinksToBeDisplayed = this.props.drinks.slice(indexOfFirstDrink, indexOfLastDrink);
        const drinks = [
            <div>
                <div className="row">
                    {
                        drinksToBeDisplayed.map(drink => {
                            return <Drink key = {drink.idDrink}
                                            {...drink}
                                            drinks = {this.props.drinks}
                            />
                        })
                    }
                    
                </div>
                <div>
                    <Footer /> 
                </div>
            </div>
        ];
        if(this.props.loading) {
            return <h2>Loading...</h2>
        }
        else if(this.props.drinks.length === 0){
            return <h2 >Couldn't find.</h2>
        }
        else{
            return drinks;
        }
        
           
        
    }
}
const mapStateToProps = state => {
    return{
        activeFilter: state.activeFilter,
        activeTag: state.activeTag,
        searchValue: state.searchValue,
        drinks: state.drinks,
        loading: state.loading,
        index: state.index,
        pageNumber: state.pageNumber
    }
};

const mapDispatchToProps = dispatch => ({
    fetchDrinks: () => {dispatch(fetchDrinks())},
    filterBySearch: () => {dispatch(filterBySearch())}
});



export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);

