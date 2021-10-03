import React  from 'react'
import {Switch,Route} from 'react-router-dom'
import NotFound from "./notFound";
import Home from './home'
 function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    )
}
export default Router