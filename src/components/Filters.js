import React from 'react';
import {getCategories} from "../constants"
import classNames from "classnames";



class Filters extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            categories: []
        }
    }

    componentDidMount() {
        getCategories()
        .then(data => this.setState({
            categories: data.drinks
        },() => console.log(this.state.categories) ))
        .catch(err => {
            console.log(err);
        });
    }


    
    render(){
        return (
        
            <div>
            <h4 className="my-5 text-center">Categories</h4>
            <ul>
                
                
                <li className={
                    classNames({
                        "list-group-item": true,
                        "active": this.props.activeFilter === "all"
                    })
                } onClick={() => this.props.onFilterDrinks("all")} >All</li>
                {
                    this.state.categories.map(categorie => {
                        return <li
                            key={categorie}
                            className={classNames({
                                "list-group-item": true,
                                "active":  this.props.activeFilter === categorie.strCategory
                            })}
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onFilterDrinks(categorie.strCategory);
                            }}>{categorie.strCategory}</li>
                    })
                }
            </ul>
        </div>
            
        );
    }
    
}

export default Filters;