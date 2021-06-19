
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import UserRoute from './core/UserRoute'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <UserRoute path="/" exact component={Home}></UserRoute>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
