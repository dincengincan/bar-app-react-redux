import React from 'react';
import {DrinkList} from "../components";
import {Filters} from "../components"



class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            activeFilter: "Cocktail",
        }
    }


    
    filterDrinks = (newFilter) => {
        this.setState({
            activeFilter: newFilter
        })
    }

    render(){
        return(
             <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Filters onFilterDrinks = {this.filterDrinks}
                                    activeFilter = {this.state.activeFilter}
                            />
                        </div>
                        <div className="col-lg-4">
                            <DrinkList activeFilter = {this.state.activeFilter}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

