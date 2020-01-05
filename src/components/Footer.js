import React from "react";
import {connect} from "react-redux";
import {incrementPageNumber, decrementPageNumber} from "../actionCreators/actionCreators";


function Footer(props){
    return(
    <nav>
        <ul  className="pagination justify-content-between">
              
                {
                    props.pageNumber < 2
                    ? <button disabled className="btn btn-outline-secondary" >&laquo; Previous Page</button>
                    : <button className="btn btn-outline-secondary" onClick={() => props.decrementPageNumber()}>&laquo; Previous Page</button>
                }

                {
                    props.drinks.length < (props.pageNumber * 12)
                    ? <button disabled className="btn btn-outline-secondary">Next Page &raquo;</button>
                    : <button className="btn btn-outline-secondary" onClick={() => props.incrementPageNumber() }>Next Page &raquo;</button>
                }
                

        </ul>
    </nav>
  )
}

const mapDispatchToProps = dispatch => ({
    incrementPageNumber: () => {dispatch(incrementPageNumber())},
    decrementPageNumber: () => {dispatch(decrementPageNumber())}
});

const mapStateToProps = state => {
    return{
        drinks: state.drinks,
        pageNumber: state.pageNumber
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);


