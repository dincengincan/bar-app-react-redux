import React from "react";
import classNames from "classnames";
import {alcoholicFilters} from "../constants"
import {connect} from "react-redux";
import {setFilter} from "../actionCreators/actionCreators";


function FiltersAlcoholic(props){
  return(
    <div>
            <ul className="categories" >
            <h4 className="my-4 text-center">Filters</h4>
            <h5 className="my-2 text-center">Alcohol</h5>
                {
                    alcoholicFilters.map(item => {
                        return <li 
                            key={item}
                            className={classNames({
                                "list-group-item": true,
                                "active":  props.activeFilter === item
                            })}
                            onClick={(e) => {
                                e.preventDefault();
                                props.setFilter("a",item);
                            }}>{item}</li>
                    })
                }
            </ul>
        </div>
  )
}

const mapDispatchToProps = dispatch => ({
    setFilter: (newTag, newFilter) => {dispatch(setFilter(newTag, newFilter))}
});

const mapStateToProps = state => {
    return{
        activeFilter: state.activeFilter,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersAlcoholic);