import React from "react";
import {Link} from "react-router-dom";

function Drink(props){
  return(
    <div className="col-md">
      <div className="card mb-4">
        <img className="card-img-top" src={props.strDrinkThumb} alt=""/>
        <div className="card-body">
          <h4 className="card-title medium">{props.strDrink}</h4>
          <div className="card-footer">
            <Link to={`/details/${props.idDrink}`} className="btn btn-outline-dark btn-sm">More Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drink;