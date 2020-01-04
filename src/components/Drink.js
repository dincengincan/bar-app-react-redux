import React from "react";
import {Link} from "react-router-dom";

function Drink(props){
  
  return(
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
      <div className="card h-100" >
        <img className="card-img-top" src={props.strDrinkThumb} alt=""/>
        <div className="card-body p-2">
          <h6 className="card-title mt-3 mb-3" >{props.strDrink}</h6>
          
          <div  className="card-footer bg-transparent" >
            <Link to={`/details/${props.idDrink}`} className="btn btn-outline-dark btn-sm">Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drink;