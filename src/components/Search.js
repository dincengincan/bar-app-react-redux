import React from 'react';
import {connect} from "react-redux";
import {setSearchValue} from "../actionCreators/actionCreators";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };
    }
    //Change the input value 
    changeValue = (e) => {
        const value = e.target.value;
        this.props.setSearchValue(value);
    };

    render(){
        const placeholder = "Something to drink?";
        return (
            <div>
                <h4>Search</h4>
                <input type="text"
                        placeholder = {placeholder}
                       value={this.props.searchValue}
                       onChange={this.changeValue}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setSearchValue: (newValue) => {dispatch(setSearchValue(newValue))},
});

const mapStateToProps = state => {
    return{
        searchValue: state.searchValue
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);