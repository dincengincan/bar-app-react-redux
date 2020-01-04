import React from 'react';
import {getDetails} from "../constants"


class DetailsPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            details: []
        }
    }
    
    componentDidMount(){
        document.title = "Details Page"

        const id = this.props.match.params.id;

        getDetails(id)
        .then(data => this.setState({
            details : data.drinks[0]
        }, () => console.log(this.state.details)))

    }
    render(){
        const { strDrinkThumb, strDrink, strCategory, strInstructions, strAlcoholic, strGlass, strIBA } = this.state.details;
        return(
            
            <div  style={{margin: "auto"}} className="col-lg-6 col-md-4 mb-4">
                <div className="card h-100">
                    
                    <img className="card-img-top"  src={strDrinkThumb} alt="" />
                      <div className="card-body">
                        <h5 className="card-title mt-4">
                            <h4>{strDrink}</h4>
                            <div>
                                <span className="badge badge-primary mb-2" >{strCategory}</span>
                            </div>
                            <div>
                                <span className="badge badge-warning mb-2 " >{strAlcoholic}</span>
                            </div>
                            <div>
                                <span className="badge badge-secondary mb-2" >{strGlass}</span>
                            </div>
                            <div>
                                <span className="badge badge-success" >{strIBA}</span>
                            </div>
                        </h5>
                            <p className="card-text">
                                {strInstructions}
                            </p>
                    </div>
                </div>
            </div>
        
        
        )
    }

    
}

export default DetailsPage;