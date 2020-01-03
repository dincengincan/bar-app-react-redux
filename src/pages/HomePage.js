import React from 'react';
import {DrinkList, Filters, FiltersAlcoholic, Search} from "../components";



class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            activeFilter: "Alcoholic",
            activeTag: "a",
            searchValue: ""
        }
    }


    
    filterDrinks = (newTag, newFilter) => {
        this.setState({
            activeFilter: newFilter,
            activeTag: newTag
        })
    }

    setSearchValue = (val) => {
        this.setState({
            searchValue: val
        });
    }

    render(){
        return(
             <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Search 
                                onSearch = {this.setSearchValue} 
                            />
                            <FiltersAlcoholic
                                onFilterDrinks = {this.filterDrinks}
                                activeFilter = {this.state.activeFilter}
                             />
                            <Filters 
                                onFilterDrinks = {this.filterDrinks}
                                activeFilter = {this.state.activeFilter}
                            />
                            
                        </div>
                        <div className="col-lg-4">
                            <DrinkList 
                                activeFilter = {this.state.activeFilter}
                                activeTag = {this.state.activeTag}
                                searchValue = {this.state.searchValue}
                            />

                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

