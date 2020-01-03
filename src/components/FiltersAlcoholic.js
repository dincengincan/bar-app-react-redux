import React from "react";
import classNames from "classnames";
import {alcoholicFilters} from "../constants"


function FiltersAlcoholic(props){
  return(
    <div>
            <ul>
                
                
            <h4 className="my-4 text-center">Filters</h4>
            <h5 className="my-2 text-center">Alcohol</h5>
                {
                    alcoholicFilters.map(item => {
                        return <li
                            key={Math.random()}
                            className={classNames({
                                "list-group-item": true,
                                "active":  props.activeFilter === item
                            })}
                            onClick={(e) => {
                                e.preventDefault();
                                props.onFilterDrinks("a",item);
                            }}>{item}</li>
                    })
                }
            </ul>
        </div>
  )
}

export default FiltersAlcoholic;