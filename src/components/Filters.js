import React from 'react';
import {getCategories} from "../constants"
import classNames from "classnames";
import {connect} from "react-redux";
import {setFilter} from "../actionCreators/actionCreators";



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
                                this.props.setFilter("c",categorie.strCategory);
                            }}>{categorie.strCategory}</li>
                    })
                }
            </ul>
        </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setFilter: (newTag, newFilter) => {dispatch(setFilter(newTag, newFilter))}
});

const mapStateToProps = state => {
    return{
        activeFilter: state.activeFilter,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);