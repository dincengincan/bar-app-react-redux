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
        this.setState({
            value 
        }, () => this.props.setSearchValue(value))
    };

    render(){
        return (
            <div style={{padding: 10 ,marginLeft: 40}}>
                <h4>Search</h4>
                <input type="text"
                       value={this.state.value}
                       onChange={this.changeValue}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setSearchValue: (newValue) => {dispatch(setSearchValue(newValue))}
});

export default connect(null, mapDispatchToProps)(Search);