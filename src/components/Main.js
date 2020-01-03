import React from 'react';
import {Route, Switch} from "react-router";
import {HomePage, DetailsPage} from "../pages";

function Main(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/details/:id" component={DetailsPage}/>
            </Switch>
        </div>
    );
}

export default Main;
