
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import Home2 from './Routes/Home2'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/eee" exact component={Home2}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
