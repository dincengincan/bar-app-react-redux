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
            
            <ul>
            <h5 className="my-2 text-center">Categories</h5>
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
                                this.props.onFilterDrinks("c",categorie.strCategory);
                            }}>{categorie.strCategory}</li>
                    })
                }
            </ul>
        </div>
            
        );
    }
}

export default Filters;