import React from 'react';
import {Drink,Footer} from "../components";
import {connect} from "react-redux";
import {fetchDrinks, filterBySearch} from "../actionCreators/actionCreators";
import ContentLoader from "react-content-loader"




class DrinkList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            index: 12,
            pageNumber: 1
        }
    }

    MyLoader = () => (
        <ContentLoader 
          height={570}
          width={400}
          speed={1}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="0" y="0" rx="4" ry="4" width="400" height="400" /> 
          <rect x="80" y="440" rx="6" ry="6" width="240" height="16" /> 
          <rect x="140" y="470" rx="6" ry="6" width="120" height="16" /> 
          <rect x="155" y="500" rx="6" ry="6" width="90" height="40" /> 
          
        </ContentLoader>
      )

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
                            />
                        })
                    }
                    
                </div>
                <div>
                    <Footer  /> 
                </div>
            </div>
        ];
        if(this.props.loading) {
            return (
                
                  <div className="row">
        
                    {[1,2,3,4,5,6].map(item =>{
                      return(
                        <div key={item} className="col-lg-6 col-md-6 col-sm-12 mb-4 ">
                          <div className="card">
                            <this.MyLoader />
                          </div>
                      </div>
                    )})}
        
                  </div>
                
              )
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

