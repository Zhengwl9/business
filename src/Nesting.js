import {Route, Switch} from "react-router-dom";
import React from "react";
import App from "./App";
export default function Nesting() {
    return (
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    );
}